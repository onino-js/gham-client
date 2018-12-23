import * as React from "react";
import { fabric } from "fabric";
import { Button, message, Col, Drawer, Checkbox, Input, Slider } from "antd";
import styled from "styled-components";
import { UiStore } from "../stores/ui.store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  uiStore?: UiStore;
}
interface State {
  fileList?: any;
  canvasMode: string;
  isOptionsVisible: boolean;
  isAddItemVisible: boolean;
  isEditBgVisible: boolean;
  isBgLocked: boolean;
}

const MyContainer: any = styled(Col as any).attrs({
  span: 24,
})`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CanvasBox: any = styled(Col as any).attrs({
  xs: 24,
  sm: 24,
  md: 24,
  lg: 20,
  xl: 14,
})`
  flex: 1;
  border: 1px solid #ccc;
  border-style: dashed;
`;

const ToolBox = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const BigInputFile = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

const BigButton = styled(Button as any)`
  height: 70px;
  width: 70px;
  margin: 10px;
`;

class Photo extends React.Component<Props, State> {
  public state = {
    fileList: [],
    canvasMode: "hand",
    isOptionsVisible: false,
    isAddItemVisible: false,
    isEditBgVisible: false,
    isBgLocked: false,
  };
  private canvas: any = null;
  private canvasBox: any = null;
  private resizeLoop: any = false;
  private canvasHeight: any = false;
  private canvasWidth: any = false;
  private background: any = false;
  private bgRotation: number = 90;
  private activeColor: string = "#ef0707";

  public componentDidMount() {
    this.canvas = new fabric.Canvas("canvas");
    this.canvas.on("mouse:dblclick", this.openDrawer);
    this.canvas.on({ "touch:longpress": this.openDrawer });
    this.canvasBox = document.getElementById("canvasBox");
    this.resizeCanvas();
  }

  private openDrawer = (e: any) => {
    if (e.target !== null) {
      const test =
        e.target.type === "rect" ||
        e.target.type === "circle" ||
        e.target.type === "i-text" ||
        e.target.type === "line";
      test && this.setState({ isOptionsVisible: true });
    }
  };

  public componentWillUnmount() {
    this.canvas.dispose();
    if (this.resizeLoop) {
      window.clearTimeout(this.resizeLoop);
    }
  }

  private resizeCanvas = () => {
    const test =
      this.canvasWidth !== this.canvasBox!.offsetWidth ||
      this.canvasHeight !== this.canvasBox!.offsetHeight;
    if (test) {
      this.canvasWidth = this.canvasBox!.offsetWidth;
      this.canvasHeight = this.canvasBox!.offsetHeight;
      this.canvas.setDimensions({
        width: this.canvasWidth,
        height: this.canvasHeight,
      });
    }
    this.resizeLoop = window.setTimeout(this.resizeCanvas, 500);
  };

  private uploadRequest = () => {
    document.getElementById("photoUpload")!.click();
  };

  private addPhoto = (file: any) => {
    const reader = new FileReader();
    reader.addEventListener(
      "load",
      () => {
        // this.canvas.setBackgroundImage(reader.result);
        fabric.Image.fromURL(reader.result, (oImg: any) => {
          oImg.scale(0.2);
          oImg.rotate(90);
          if (this.background) {
            this.canvas.remove(this.background);
          }
          this.background = oImg;
          this.background.selectable = !this.state.isBgLocked;
          // this.canvas.setBackgroundImage(
          //   oImg,
          //   this.canvas.renderAll.bind(this.canvas),
          // );
          this.styleControl(oImg);
          this.canvas.add(oImg);
          this.background.sendToBack();
        });
      },
      false,
    );
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  private onPhotoUpload = (e: any) => {
    this.addPhoto(e.target.files[0]);
  };

  private drawingModeOn = () => {
    this.canvas.isDrawingMode = true;
    this.setState({
      canvasMode: "free",
    });
  };

  private handModeOn = () => {
    this.canvas.isDrawingMode = false;
    this.setState({
      canvasMode: "hand",
    });
  };

  private addSquare = () => {
    const rect = new fabric.Rect({
      top: 100,
      left: 100,
      width: 60,
      height: 70,
      fill: "#ef0707",
      stroke: "#ef0707",
      strokeWidth: 4,
    });
    this.canvas.add(this.styleControl(rect));
  };

  private addCircle = () => {
    const circle = new fabric.Circle({
      top: 100,
      left: 100,
      radius: 50,
      fill: "#ef0707",
      stroke: "#ef0707",
      strokeWidth: 4,
    });
    this.canvas.add(this.styleControl(circle));
  };

  private addLine = () => {
    const line = new fabric.Line([0, 0, 100, 100], {
      fill: "#ef0707",
      stroke: "#ef0707",
      strokeWidth: 1,
      selectable: true,
      evented: true,
    });
    this.canvas.add(this.styleControl(line));
  };

  private addText = () => {
    const text = new fabric.IText("TEXT", {
      left: 100,
      top: 150,
      fill: "#ef0707",
      strokeWidth: 2,
      stroke: "#ef0707",
    });
    this.canvas.add(this.styleControl(text));
  };

  private styleControl = (item: any) => {
    item.cornerSize = 20;
    item.cornerColor = "#1890ff";
    item.cornerStrokeColor = "#1890ff";
    item.transparentCorners = false;
    item.cornerStyle = "circle";
    return item;
  };

  private clearCanvas = () => this.canvas.clear();

  private clearSelection = () => {
    const active = this.canvas.getActiveObject();
    if (active !== null && active !== undefined) {
      if (active._objects) {
        active._objects.forEach((item: any) => this.canvas.remove(item));
      } else {
        this.canvas.remove(active);
      }
    }
  };

  private rotateBackground = (sens: string) => {
    const rotateValue = sens === "right" ? 90 : -90;
    this.bgRotation += rotateValue;
    if (this.background) {
      this.background.rotate(this.bgRotation);
      this.canvas.requestRenderAll();
    }
  };

  private lockBackground = () => {
    this.setState({ isBgLocked: !this.state.isBgLocked });
    if (this.background) {
      this.background.selectable = !this.background.selectable;
    }
    this.canvas.requestRenderAll();
  };

  private toggleObjFond = (e: any) => {
    const active = this.canvas.getActiveObject();
    const value =
      active.fill === "transparent" ? this.activeColor : "transparent";
    active.set("fill", value);
    this.canvas.renderAll();
  };

  private changeObjColor = (e: any) => {
    const active = this.canvas.getActiveObject();
    active.fill !== "transparent" && active.set("fill", e.target.value);
    this.activeColor = e.target.value;
    this.canvas.renderAll();
  };

  private changeObjOpacity = (value: any) => {
    const active = this.canvas.getActiveObject();
    active.set("opacity", value);
    this.canvas.renderAll();
  };

  public render(): React.ReactNode {
    return (
      <MyContainer>
        <ToolBox>
          <BigInputFile
            id="photoUpload"
            type="file"
            name="file"
            onChange={this.onPhotoUpload}
          />
          <BigButton
            onClick={() =>
              this.setState({
                isEditBgVisible: !this.state.isEditBgVisible,
              })
            }
          >
            <FontAwesomeIcon icon="image" style={{ fontSize: "2em" }} />
          </BigButton>

          <BigButton
            onClick={() =>
              this.setState({
                isAddItemVisible: !this.state.isAddItemVisible,
              })
            }
          >
            <FontAwesomeIcon icon="plus" style={{ fontSize: "2em" }} />
          </BigButton>

          <BigButton onClick={this.handModeOn}>
            <FontAwesomeIcon icon="hand-paper" style={{ fontSize: "2em" }} />
          </BigButton>
          <BigButton onClick={this.clearSelection}>
            <FontAwesomeIcon icon="times" style={{ fontSize: "2em" }} />
          </BigButton>
          <BigButton onClick={this.clearCanvas}>
            <FontAwesomeIcon icon="sync-alt" style={{ fontSize: "2em" }} />
          </BigButton>
        </ToolBox>
        <CanvasBox id="canvasBox">
          <canvas id="canvas" />
        </CanvasBox>
        <Drawer
          title="Options"
          placement="right"
          closable={true}
          onClose={() => this.setState({ isOptionsVisible: false })}
          visible={this.state.isOptionsVisible}
        >
          <Checkbox defaultChecked={true} onChange={this.toggleObjFond}>
            Fond
          </Checkbox>
          <p>coulur de fond</p>
          <Input
            type="color"
            defaultValue={this.activeColor}
            onChange={this.changeObjColor}
          />
          <p>opacité</p>
          <Slider
            defaultValue={30}
            onChange={this.changeObjOpacity}
            min={0}
            max={1}
            step={0.1}
          />
        </Drawer>
        <Drawer
          closable={false}
          placement="right"
          style={{ padding: 0 }}
          width={90}
          onClose={() => this.setState({ isAddItemVisible: false })}
          visible={this.state.isAddItemVisible}
        >
          <BigButton onClick={this.addSquare}>
            <FontAwesomeIcon icon="square" style={{ fontSize: "2em" }} />
          </BigButton>
          <BigButton onClick={this.addLine}>
            <FontAwesomeIcon icon="slash" style={{ fontSize: "2em" }} />
          </BigButton>
          <BigButton onClick={this.addCircle}>
            <FontAwesomeIcon icon="circle" style={{ fontSize: "2em" }} />
          </BigButton>
          <BigButton onClick={this.addText}>
            <FontAwesomeIcon icon="font" style={{ fontSize: "2em" }} />
          </BigButton>
          <BigButton onClick={this.drawingModeOn}>
            <FontAwesomeIcon icon="pen" style={{ fontSize: "2em" }} />
          </BigButton>
        </Drawer>
        <Drawer
          width={90}
          placement="right"
          closable={false}
          style={{ padding: 0 }}
          onClose={() => this.setState({ isEditBgVisible: false })}
          visible={this.state.isEditBgVisible}
        >
          <BigButton onClick={this.uploadRequest}>
            <FontAwesomeIcon icon="camera" style={{ fontSize: "2em" }} />
          </BigButton>
          <BigButton onClick={() => this.rotateBackground("left")}>
            <FontAwesomeIcon icon="undo" style={{ fontSize: "2em" }} />
          </BigButton>
          <BigButton onClick={() => this.rotateBackground("right")}>
            <FontAwesomeIcon icon="redo" style={{ fontSize: "2em" }} />
          </BigButton>
          <BigButton onClick={this.lockBackground}>
            <FontAwesomeIcon
              icon={this.state.isBgLocked ? "lock" : "lock-open"}
              style={{ fontSize: "2em" }}
            />
          </BigButton>
        </Drawer>
      </MyContainer>
    );
  }
}

export default Photo;

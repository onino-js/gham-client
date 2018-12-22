import * as React from "react";
import { fabric } from "fabric";
import { Button, message, Upload, Icon, Col } from "antd";
import marker from "./../image/marker-icon.png";
import styled from "styled-components";
import { UiStore } from "../stores/ui.store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  uiStore?: UiStore;
}
interface State {
  fileList?: any;
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
  lg: 14,
  xl: 10,
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
  };
  private canvas: any = null;
  private canvasBox: any = null;
  private resizeLoop: any = false;
  private canvasHeight: any = false;
  private canvasWidth: any = false;

  public componentDidMount() {
    this.canvas = new fabric.Canvas("canvas");
    this.canvasBox = document.getElementById("canvasBox");
    this.resizeCanvas();
  }
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

  public addPhoto = (file: any) => {
    const reader = new FileReader();
    reader.addEventListener(
      "load",
      () => {
        fabric.Image.fromURL(reader.result, (oImg: any) => {
          this.canvas.add(oImg);
        });
      },
      false,
    );
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  public onPhotoUpload = (e: any) => {
    this.addPhoto(e.target.files[0]);
  };

  public addMarker = () => {
    fabric.Image.fromURL(marker, (oImg: any) => {
      this.canvas.add(oImg);
    });
  };

  public addSquare = () => {
    const rect = new fabric.Rect({
      top: 100,
      left: 100,
      width: 60,
      height: 70,
      fill: "red",
    });
    this.canvas.add(rect);
  };

  public addCircle = () => {
    const circle = new fabric.Circle({
      top: 100,
      left: 100,
      radius: 50,
      stroke: "red",
      strokeWidth: 4,
      fill: "transparent",
    });
    this.canvas.add(circle);
  };

  private clearCanvas = () => this.canvas.clear();

  private clearSelection = () => {
    const box = document.getElementById("canvasBox");
    const width = box!.offsetWidth;
    const height = box!.offsetHeight;
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
          <BigButton onClick={this.uploadRequest}>
            <FontAwesomeIcon icon="camera" style={{ fontSize: "2em" }} />
          </BigButton>
          <BigButton onClick={this.addMarker}>
            <FontAwesomeIcon
              icon="map-marker-alt"
              style={{ fontSize: "2em" }}
            />
          </BigButton>
          <BigButton onClick={this.addSquare}>
            <FontAwesomeIcon icon="square" style={{ fontSize: "2em" }} />
          </BigButton>
          <BigButton onClick={this.addCircle}>
            <FontAwesomeIcon icon="circle" style={{ fontSize: "2em" }} />
          </BigButton>
          <BigButton onClick={this.addCircle}>
            <FontAwesomeIcon icon="font" style={{ fontSize: "2em" }} />
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
      </MyContainer>
    );
  }
}

export default Photo;

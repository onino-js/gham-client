import * as React from "react";
import { Col, Button } from "antd";
import styled from "styled-components";
import { UiStore } from "./../../../stores/ui.store";
import { inject, observer } from "mobx-react";
import { AllStores } from "./../../../models/all.stores.model";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CanvasStore } from "../../../stores/canvas.store";
import EditBg from "./EditBg";
import { _secondary } from "../../../css/_colors";

interface Props {
  uiStore?: UiStore;
  canvasStore?: CanvasStore;
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

const ToolBox = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const CanvasBox: any = styled(Col as any).attrs({
  xs: 24,
  sm: 24,
  md: 24,
  lg: 20,
  xl: 14,
})`
  flex: 1;
  border: 1px solid ${_secondary};
  border-style: dashed;
`;

const BigButton = styled(Button as any)`
  height: 70px;
  width: 70px;
  margin: 10px;
`;

const BigInputFile = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

@inject((allStores: AllStores) => ({
  canvasStore: allStores.canvasStore,
}))
@observer
class Photo extends React.Component<Props, State> {
  public componentDidMount() {
    this.props.canvasStore!.initialize({
      canvasId: "canvas",
      canvasType: "bg",
    });
  }

  public componentWillUnmount() {
    this.props.canvasStore!.saveObjects("bg");
    this.props.canvasStore!.unmount();
  }

  public render(): React.ReactNode {
    const canvasStore = this.props.canvasStore!;
    return (
      <MyContainer>
        <ToolBox>
          <BigInputFile
            id="photoUpload"
            type="file"
            name="file"
            onChange={canvasStore.onPhotoUpload}
          />
          <BigButton onClick={canvasStore.uploadRequest}>
            <FontAwesomeIcon icon="camera" style={{ fontSize: "2em" }} />
          </BigButton>
          <BigButton onClick={() => canvasStore.rotateBackground("left")}>
            <FontAwesomeIcon icon="undo" style={{ fontSize: "2em" }} />
          </BigButton>
          <BigButton onClick={() => canvasStore.rotateBackground("right")}>
            <FontAwesomeIcon icon="redo" style={{ fontSize: "2em" }} />
          </BigButton>
          <BigButton onClick={canvasStore.clearSelection}>
            <FontAwesomeIcon icon="times" style={{ fontSize: "2em" }} />
          </BigButton>
          <BigButton onClick={canvasStore.clearCanvas}>
            <FontAwesomeIcon icon="sync-alt" style={{ fontSize: "2em" }} />
          </BigButton>
        </ToolBox>
        <CanvasBox id="canvasBox">
          <canvas id="canvas" />
        </CanvasBox>
        <EditBg />
      </MyContainer>
    );
  }
}

export default Photo;

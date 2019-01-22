import * as React from "react";
import styled from "styled-components";
import { UiStore } from "../../../stores/ui/index";
import { inject, observer } from "mobx-react";
import { AllStores } from "./../../../models/all.stores.model";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CanvasStore } from "../../../stores/canvas.store";
import { SquareButton } from "../../shared/Buttons";

interface Props {
  uiStore?: UiStore;
  canvasStore?: CanvasStore;
}
interface State {
  fileList?: any;
}

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

@inject((allStores: AllStores) => ({
  canvasStore: allStores.canvasStore,
}))
@observer
class AddPhoto extends React.Component<Props, State> {
  public render(): React.ReactNode {
    const canvasStore = this.props.canvasStore!;
    return (
      <ToolBox>
        <BigInputFile
          id="photoUpload"
          type="file"
          name="file"
          onChange={canvasStore.onPhotoUpload}
        />
        <SquareButton onClick={canvasStore.uploadRequest} s={70}>
          <FontAwesomeIcon icon="camera" />
        </SquareButton>
        <SquareButton
          onClick={() => canvasStore.rotateBackground("left")}
          s={70}
        >
          <FontAwesomeIcon icon="undo" />
        </SquareButton>
        <SquareButton
          onClick={() => canvasStore.rotateBackground("right")}
          s={70}
        >
          <FontAwesomeIcon icon="redo" />
        </SquareButton>
        <SquareButton onClick={canvasStore.clearSelection} s={70}>
          <FontAwesomeIcon icon="times" />
        </SquareButton>
        <SquareButton onClick={canvasStore.clearCanvas} s={70}>
          <FontAwesomeIcon icon="sync-alt" />
        </SquareButton>
      </ToolBox>
    );
  }
}

export default AddPhoto;

import * as React from "react";
import { fabric } from "fabric";
import { Button, message, Col, Drawer, Checkbox, Input, Slider } from "antd";
import styled from "styled-components";
import { UiStore } from "./../../stores/ui.store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { inject, observer } from "mobx-react";
import { AllStores } from "./../../models/all.stores.model";
import { CanvasStore } from "../../stores/canvas.store";

interface Props {
  uiStore?: UiStore;
  canvasStore?: CanvasStore;
}
interface State {}

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

@inject((allStores: AllStores) => ({
  canvasStore: allStores.canvasStore,
  uiStore: allStores.uiStore,
}))
@observer
class EditCanvas extends React.Component<Props, State> {
  private openAddItem = () => {
    this.props.uiStore!.toggleBool({
      key: "isCanvasAddItemVisible",
      value: true,
    });
  };
  public render(): React.ReactNode {
    const canvasStore = this.props.canvasStore!;
    const uiStore = this.props.uiStore!;
    return (
      <ToolBox>
        <BigButton onClick={this.openAddItem}>
          <FontAwesomeIcon icon="plus" style={{ fontSize: "2em" }} />
        </BigButton>
        <BigButton onClick={canvasStore.handModeOn}>
          <FontAwesomeIcon icon="hand-paper" style={{ fontSize: "2em" }} />
        </BigButton>
        <BigButton onClick={canvasStore.clearSelection}>
          <FontAwesomeIcon icon="times" style={{ fontSize: "2em" }} />
        </BigButton>
        <BigButton onClick={canvasStore.clearCanvas}>
          <FontAwesomeIcon icon="sync-alt" style={{ fontSize: "2em" }} />
        </BigButton>
      </ToolBox>
    );
  }
}

export default EditCanvas;

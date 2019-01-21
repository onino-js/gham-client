import * as React from "react";
import styled from "styled-components";
import { UiStore } from "../../../stores/ui/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { inject, observer } from "mobx-react";
import { AllStores } from "./../../../models/all.stores.model";
import { CanvasStore } from "../../../stores/canvas.store";
import { SquareButton } from "../../shared/Buttons";

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
        <SquareButton onClick={this.openAddItem} s={70}>
          <FontAwesomeIcon icon="plus" style={{ fontSize: "2em" }} />
        </SquareButton>
        <SquareButton onClick={canvasStore.handModeOn} s={70}>
          <FontAwesomeIcon icon="hand-paper" style={{ fontSize: "2em" }} />
        </SquareButton>
        <SquareButton onClick={canvasStore.clearSelection} s={70}>
          <FontAwesomeIcon icon="times" style={{ fontSize: "2em" }} />
        </SquareButton>
        <SquareButton onClick={canvasStore.clearCanvas} s={70}>
          <FontAwesomeIcon icon="sync-alt" style={{ fontSize: "2em" }} />
        </SquareButton>
      </ToolBox>
    );
  }
}

export default EditCanvas;

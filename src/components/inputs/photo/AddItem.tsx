import * as React from "react";
import { Button, Drawer } from "antd";
import styled from "styled-components";
import { UiStore } from "./../../../stores/ui.store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { inject, observer } from "mobx-react";
import { AllStores } from "./../../../models/all.stores.model";
import { CanvasStore } from "../../../stores/canvas.store";

interface Props {
  uiStore?: UiStore;
  canvasStore?: CanvasStore;
}
interface State {}

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
class AddItem extends React.Component<Props, State> {
  private closeAddItem = () => {
    this.props.uiStore!.toggleBool({
      key: "isCanvasAddItemVisible",
      value: false,
    });
  };
  public render(): React.ReactNode {
    const photo = this.props.canvasStore!;
    const uiStore = this.props.uiStore!;
    return (
      <Drawer
        closable={false}
        placement="right"
        style={{ padding: 0 }}
        width={90}
        onClose={this.closeAddItem}
        visible={uiStore.isCanvasAddItemVisible}
      >
        <BigButton onClick={photo.addSquare}>
          <FontAwesomeIcon icon="square" style={{ fontSize: "2em" }} />
        </BigButton>
        <BigButton onClick={photo.addLine}>
          <FontAwesomeIcon icon="slash" style={{ fontSize: "2em" }} />
        </BigButton>
        <BigButton onClick={photo.addCircle}>
          <FontAwesomeIcon icon="circle" style={{ fontSize: "2em" }} />
        </BigButton>
        <BigButton onClick={photo.addText}>
          <FontAwesomeIcon icon="font" style={{ fontSize: "2em" }} />
        </BigButton>
        <BigButton onClick={photo.drawingModeOn}>
          <FontAwesomeIcon icon="pen" style={{ fontSize: "2em" }} />
        </BigButton>
      </Drawer>
    );
  }
}

export default AddItem;

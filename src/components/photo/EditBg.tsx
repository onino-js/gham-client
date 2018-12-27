import * as React from "react";
import { Button, Drawer } from "antd";
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
class EditBg extends React.Component<Props, State> {
  private closeEditBg = () => {
    this.props.uiStore!.toggleBool({
      key: "isEditBgVisible",
      value: false,
    });
  };
  private scaleUp = () => {
    this.props.canvasStore!.scale(0.1);
  };
  private scaleDown = () => {
    this.props.canvasStore!.scale(-0.1);
  };
  public render(): React.ReactNode {
    const canvasStore = this.props.canvasStore!;
    const uiStore = this.props.uiStore!;
    return (
      <Drawer
        closable={false}
        placement="right"
        style={{ padding: 0 }}
        width={90}
        onClose={this.closeEditBg}
        visible={uiStore.isEditBgVisible}
      >
        <BigButton onClick={canvasStore.adjust}>
          <FontAwesomeIcon icon="expand" style={{ fontSize: "2em" }} />
        </BigButton>
        <BigButton onClick={canvasStore.center}>
          <FontAwesomeIcon icon="compress" style={{ fontSize: "2em" }} />
        </BigButton>
        <BigButton onClick={this.scaleUp}>
          <FontAwesomeIcon
            icon="expand-arrows-alt"
            style={{ fontSize: "2em" }}
          />
        </BigButton>
        <BigButton onClick={this.scaleDown}>
          <FontAwesomeIcon
            icon="compress-arrows-alt"
            style={{ fontSize: "2em" }}
          />
        </BigButton>
      </Drawer>
    );
  }
}

export default EditBg;

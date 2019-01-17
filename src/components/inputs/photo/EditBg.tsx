import * as React from "react";
import { Button, Drawer } from "antd";
import styled from "styled-components";
import { UiStore } from "../../../stores/ui/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { inject, observer } from "mobx-react";
import { AllStores } from "./../../../models/all.stores.model";
import { CanvasStore } from "../../../stores/canvas.store";
import { SquareButton } from "../../shared/Styled";

interface Props {
  uiStore?: UiStore;
  canvasStore?: CanvasStore;
}
interface State {}

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
        <SquareButton onClick={canvasStore.adjust} s={70}>
          <FontAwesomeIcon icon="expand" style={{ fontSize: "2em" }} />
        </SquareButton>
        <SquareButton onClick={canvasStore.center} s={70}>
          <FontAwesomeIcon icon="compress" style={{ fontSize: "2em" }} />
        </SquareButton>
        <SquareButton onClick={this.scaleUp} s={70}>
          <FontAwesomeIcon
            icon="expand-arrows-alt"
            style={{ fontSize: "2em" }}
          />
        </SquareButton>
        <SquareButton onClick={this.scaleDown} s={70}>
          <FontAwesomeIcon
            icon="compress-arrows-alt"
            style={{ fontSize: "2em" }}
          />
        </SquareButton>
      </Drawer>
    );
  }
}

export default EditBg;

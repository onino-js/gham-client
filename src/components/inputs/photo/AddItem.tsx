import * as React from "react";
import { Button, Drawer } from "antd";
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
        <SquareButton onClick={photo.addSquare} s={70}>
          <FontAwesomeIcon icon="square" style={{ fontSize: "2em" }} />
        </SquareButton>
        <SquareButton onClick={photo.addLine} s={70}>
          <FontAwesomeIcon icon="slash" style={{ fontSize: "2em" }} />
        </SquareButton>
        <SquareButton onClick={photo.addCircle} s={70}>
          <FontAwesomeIcon icon="circle" style={{ fontSize: "2em" }} />
        </SquareButton>
        <SquareButton onClick={photo.addText} s={70}>
          <FontAwesomeIcon icon="font" style={{ fontSize: "2em" }} />
        </SquareButton>
        <SquareButton onClick={photo.drawingModeOn} s={70}>
          <FontAwesomeIcon icon="pen" style={{ fontSize: "2em" }} />
        </SquareButton>
      </Drawer>
    );
  }
}

export default AddItem;

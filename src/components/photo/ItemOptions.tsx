import * as React from "react";
import { Drawer, Checkbox, Input, Slider } from "antd";
import { UiStore } from "./../../stores/ui.store";
import { inject, observer } from "mobx-react";
import { AllStores } from "./../../models/all.stores.model";
import { CanvasStore } from "../../stores/canvas.store";

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
class ItemOptions extends React.Component<Props, State> {
  private close = () => {
    this.props.uiStore!.toggleBool({
      key: "isCanvasItemOptionsVisible",
      value: false,
    });
  };
  public render(): React.ReactNode {
    const photo = this.props.canvasStore!;
    const uiStore = this.props.uiStore!;
    return (
      <Drawer
        title="Options"
        placement="right"
        closable={true}
        onClose={this.close}
        visible={uiStore.isCanvasItemOptionsVisible}
      >
        <Checkbox defaultChecked={true} onChange={photo.toggleObjFond}>
          Fond
        </Checkbox>
        <p>couleur de fond</p>
        <Input
          type="color"
          defaultValue={photo.activeObj.fill}
          onChange={photo.changeObjColor}
        />
        <p>opacité</p>
        <Slider
          defaultValue={30}
          onChange={photo.changeObjOpacity}
          min={0}
          max={1}
          step={0.1}
        />
      </Drawer>
    );
  }
}

export default ItemOptions;

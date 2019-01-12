import * as React from "react";
import { Drawer, Checkbox, Input, Slider, Divider, Button } from "antd";
import { UiStore } from "./../../../stores/ui.store";
import { inject, observer } from "mobx-react";
import { AllStores } from "./../../../models/all.stores.model";
import { CanvasStore } from "../../../stores/canvas.store";

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
    const canvasStore = this.props.canvasStore!;
    const uiStore = this.props.uiStore!;
    return (
      <Drawer
        title="Options"
        placement="right"
        closable={true}
        onClose={this.close}
        visible={uiStore.isCanvasItemOptionsVisible}
      >
        <Button onClick={canvasStore.toggleObjFond}>Retirer fond</Button>
        <Divider />
        <p>couleur de fond</p>
        <Input
          type="color"
          value={canvasStore.activeObjOptions.fill}
          onChange={canvasStore.changeObjColor}
        />
        <Divider />
        <p>couleur de bordure</p>
        <Input
          type="color"
          value={canvasStore.activeObjOptions.stroke}
          onChange={canvasStore.changeObjStrokeColor}
        />
        <Divider />
        <p>opacité</p>
        <Slider
          value={canvasStore.activeObjOptions.opacity}
          onChange={canvasStore.changeObjOpacity}
          min={0}
          max={1}
          step={0.1}
        />
        <Divider />
        <p>Epaisseur bordure</p>
        <Slider
          value={canvasStore.activeObjOptions.strokeWidth}
          onChange={canvasStore.changeObjStrokeWidth}
          min={0}
          max={10}
          step={1}
        />
      </Drawer>
    );
  }
}

export default ItemOptions;

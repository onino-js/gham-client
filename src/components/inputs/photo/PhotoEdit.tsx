import * as React from "react";
import { Col } from "antd";
import styled from "styled-components";
import { UiStore } from "../../../stores/ui/index";
import { inject, observer } from "mobx-react";
import { AllStores } from "./../../../models/all.stores.model";
import EditCanvas from "./EditCanvas";
import ObjOptions from "./ItemOptions";
import AddItem from "./AddItem";
import { CanvasStore } from "../../../stores/canvas.store";
import { _secondary } from "../../../css/_colors";
import { Flex } from "../../layout/Flex";
import { CanvasBox } from "../../shared/Styled";

interface Props {
  uiStore?: UiStore;
  canvasStore?: CanvasStore;
}
interface State {
  fileList?: any;
}

@inject((allStores: AllStores) => ({
  canvasStore: allStores.canvasStore,
}))
@observer
class PhotoEdit extends React.Component<Props, State> {
  public componentDidMount() {
    this.props.canvasStore!.initialize({
      canvasId: "canvas",
      canvasType: "after",
    });
  }

  public componentWillUnmount() {
    this.props.canvasStore!.saveObjects("after");
    this.props.canvasStore!.savePhoto("photoAfterWork");
    this.props.canvasStore!.unmount();
  }

  public render(): React.ReactNode {
    return (
      <Flex dir="c" alignH="center" style={{ height: "100%" }}>
        <EditCanvas />
        <CanvasBox id="canvasBox">
          <canvas id="canvas" />
        </CanvasBox>
        <ObjOptions />
        <AddItem />
      </Flex>
    );
  }
}

export default PhotoEdit;

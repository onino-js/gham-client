import * as React from "react";
import { Col } from "antd";
import styled from "styled-components";
import { UiStore } from "./../../stores/ui.store";
import { inject, observer } from "mobx-react";
import { AllStores } from "./../../models/all.stores.model";
import EditCanvas from "./EditCanvas";
import ObjOptions from "./ItemOptions";
import AddItem from "./AddItem";
import { CanvasStore } from "../../stores/canvas.store";

interface Props {
  uiStore?: UiStore;
  canvasStore?: CanvasStore;
}
interface State {
  fileList?: any;
}

const MyContainer: any = styled(Col as any).attrs({
  span: 24,
})`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CanvasBox: any = styled(Col as any).attrs({
  xs: 24,
  sm: 24,
  md: 24,
  lg: 20,
  xl: 14,
})`
  flex: 1;
  border: 1px solid #ccc;
  border-style: dashed;
`;

@inject((allStores: AllStores) => ({
  canvasStore: allStores.canvasStore,
}))
@observer
class WorkoutBefore extends React.Component<Props, State> {
  public componentDidMount() {
    this.props.canvasStore!.initialize({
      canvasId: "canvas",
      canvasType: "before",
    });
  }

  public componentWillUnmount() {
    this.props.canvasStore!.saveObjects("before");
    this.props.canvasStore!.savePhoto("photoBeforeWork");
    this.props.canvasStore!.unmount();
  }

  public render(): React.ReactNode {
    return (
      <MyContainer>
        <EditCanvas />
        <CanvasBox id="canvasBox">
          <canvas id="canvas" />
        </CanvasBox>
        <ObjOptions />
        <AddItem />
      </MyContainer>
    );
  }
}

export default WorkoutBefore;

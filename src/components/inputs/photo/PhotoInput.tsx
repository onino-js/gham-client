import * as React from "react";
import { UiStore } from "../../../stores/ui/index";
import { inject, observer } from "mobx-react";
import { AllStores } from "./../../../models/all.stores.model";
import EditCanvas from "./EditCanvas";
import ObjOptions from "./ItemOptions";
import AddItem from "./AddItem";
import { CanvasStore } from "../../../stores/canvas.store";
import { Flex } from "../../layout/Flex";
import { CanvasBox } from "../StyledInput";
import { ContactStore } from "../../../stores/contact.store";
import AddPhoto from "./AddPhoto";
import EditBg from "./EditBg";

interface Props {
  uiStore?: UiStore;
  canvasStore?: CanvasStore;
  canvasType: keyof ContactStore;
  canvasId: string;
  addPhoto?: boolean;
  addItems?: boolean;
  editItem?: boolean;
  editPhoto?: boolean;
}
interface State {
  fileList?: any;
}

@inject((allStores: AllStores) => ({
  canvasStore: allStores.canvasStore,
}))
@observer
class PhotoInput extends React.Component<Props, State> {
  public componentDidMount() {
    this.props.canvasStore!.initialize({
      canvasId: this.props.canvasId,
      canvasType: this.props.canvasType,
    });
  }

  public componentWillUnmount() {
    this.props.canvasStore!.saveObjects(this.props.canvasType);
    this.props.canvasStore!.savePhoto(this.props.canvasType);
    this.props.canvasStore!.unmount();
  }

  public render(): React.ReactNode {
    return (
      <Flex dir="c" alignH="center" style={{ height: "100%" }}>
        {this.props.addItems && (
          <React.Fragment>
            <EditCanvas />
            <AddItem />
          </React.Fragment>
        )}
        {this.props.editItem && <ObjOptions />}
        {this.props.addPhoto && <AddPhoto />}
        {this.props.editPhoto && <EditBg />}

        <CanvasBox id="canvasBox">
          <canvas id={this.props.canvasId} />
        </CanvasBox>
      </Flex>
    );
  }
}

export default PhotoInput;
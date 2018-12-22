import * as React from "react";
import { fabric } from "fabric";
import { Button, message, Upload, Icon, Modal, Col } from "antd";
import styled from "styled-components";
import { inject, observer } from "mobx-react";
import { UiStore } from "../stores/ui.store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ContactStore } from "../stores/contact.store";
import { AllStores } from "../models/all.stores.model";

interface Props {
  uiStore?: UiStore;
  contactStore?: ContactStore;
}
interface State {
  fileList?: any;
  showSignature: boolean;
  canDelete: boolean;
}

const ToolBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 10px;
  padding-top: 10px;
`;

const BigButton = styled(Button as any)`
  width: 100px;
  height: 100px;
  margin: 10px;
`;

const Title = styled.div`
  font-size: 2em;
  font-weight: 900;
  padding-top: 10px;
  padding-bottom: 10px;
  color: #ccc;
`;

const CanvasBox = styled.div`
  border: 4px solid #ccc;
  border-radius: 15px;
  flex: 1;
  min-height: 200px;
`;

const SignatureBox = styled.div`
  margin-top: 40px;
`;

@inject((allStores: AllStores) => ({
  uiStore: allStores.uiStore,
  contactStore: allStores.contactStore,
}))
@observer
class Signature extends React.Component<Props, State> {
  public state = {
    fileList: [],
    showSignature: false,
    canDelete: false,
  };
  private canvas: any = null;
  private signatureContainer: any = null;

  public componentDidMount() {
    this.signatureContainer = document.getElementById("signatureBox");
    if (this.props.contactStore!.signature !== "") {
      const img = new Image();
      img.style.border = "1px solid #CCC";
      img.style.borderStyle = "dashed";
      img.src = this.props.contactStore!.signature;
      this.signatureContainer!.appendChild(img);
      this.setState({ canDelete: true });
    }
  }
  public componentWillUnmount() {
    // this.canvas.dispose();
  }

  private clearCanvas = () => this.canvas.clear();

  private handleOk = () => {
    const img = new Image();
    img.style.border = "1px solid #CCC";
    img.style.borderStyle = "dashed";
    const dataURL = this.canvas.toDataURL("image/png");
    img.src = dataURL;
    this.signatureContainer!.appendChild(img);
    this.props.contactStore!.setProp({
      key: "signature",
      value: dataURL,
    });
    this.setState({ showSignature: false, canDelete: true });
    this.canvas.clear();
  };

  private handleCancel = () => {
    this.clearCanvas();
    this.setState({ showSignature: false });
  };

  private newSignature = () => {
    this.setState({
      showSignature: true,
    });
    window.setTimeout(() => this.newCanvas(), 500);
  };

  private newCanvas = () => {
    if (this.canvas === null) {
      this.canvas = new fabric.Canvas("canvas", { isDrawingMode: true });
    }
    const box = document.getElementById("canvasContainer");
    const width = box!.offsetWidth;
    const height = box!.offsetHeight;
    this.canvas.setDimensions({
      width: width - 6,
      height: height - 6,
    });
  };

  private deleteSignature = () => {
    this.signatureContainer.removeChild(this.signatureContainer.childNodes[0]);
    this.setState({ canDelete: false });
    this.props.contactStore!.setProp({
      key: "signature",
      value: "",
    });
  };

  public render(): React.ReactNode {
    return (
      <React.Fragment>
        <Title>Signature client</Title>
        <Col>
          <BigButton
            onClick={this.newSignature}
            disabled={this.state.canDelete}
          >
            <FontAwesomeIcon icon="pen-alt" style={{ fontSize: "3em" }} />
          </BigButton>
          <BigButton
            onClick={this.deleteSignature}
            disabled={!this.state.canDelete}
          >
            <FontAwesomeIcon icon="trash" style={{ fontSize: "3em" }} />
          </BigButton>
        </Col>
        <SignatureBox id="signatureBox" />
        <Modal
          visible={this.state.showSignature}
          closable={false}
          footer={[
            <Button onClick={this.handleCancel}>ANNULER</Button>,
            <Button type="primary" onClick={this.handleOk}>
              OK
            </Button>,
          ]}
        >
          <ToolBox>
            <BigButton onClick={this.clearCanvas}>
              <FontAwesomeIcon icon="sync-alt" style={{ fontSize: "3em" }} />
            </BigButton>
          </ToolBox>
          <CanvasBox id="canvasContainer">
            <canvas id="canvas" />
          </CanvasBox>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Signature;

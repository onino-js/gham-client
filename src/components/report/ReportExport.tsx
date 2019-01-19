import * as React from "react";
import saveAs from "file-saver";
import { inject, observer } from "mobx-react";
import { Button, Col } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ProjectStore } from "../../stores/project.store";
import { UiStore } from "../../stores/ui/index";
import { AllStores } from "../../models/all.stores.model";
import styled from "../../styled-components";
import { htmlReport } from "../../services/report-generation/report-gerneration.service";
import { ContactStore } from "../../stores/contact.store";
import { _secondary } from "../../css/_colors";

interface Props {
  projectStore?: ProjectStore;
  contactStore: ContactStore;
  uiStore?: UiStore;
}

const MyContainer: any = styled(Col as any).attrs({
  span: 24,
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
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
  color: ${_secondary};
`;

@inject((allStores: AllStores) => ({
  projectStore: allStores.projectStore,
  contactStore: allStores.contactStore,
  uiStore: allStores.uiStore,
}))
@observer
class ReportExport extends React.Component<Props> {
  private exportWord = () => {
    const htmlString = htmlReport();
    const byteNumbers = new Uint8Array(htmlString.length);
    for (let i = 0; i < htmlString.length; i++) {
      byteNumbers[i] = htmlString.charCodeAt(i);
    }
    const blob = new Blob([htmlString], {
      type: "text/plain;charset=UTF-8",
    });
    saveAs(blob, "example.docx");
  };
  private exportHtml = () => {
    const htmlString = htmlReport();
    const byteNumbers = new Uint8Array(htmlString.length);
    for (let i = 0; i < htmlString.length; i++) {
      byteNumbers[i] = htmlString.charCodeAt(i);
    }
    const blob = new Blob([htmlString], {
      type: "text/plain;charset=UTF-8",
    });
    saveAs(blob, "example.html");
  };
  private exportPdf = () => {
    const htmlString = htmlReport();
    const wnd = window.open("about:blank", "", "_blank");
    wnd!.document.write(htmlString);
    wnd!.print();
  };

  public render() {
    return (
      <MyContainer>
        <Title>Choisissez un format : </Title>
        <span>
          <BigButton
            type="primary"
            title="Enregistrer au format pdf"
            onClick={this.exportPdf}
          >
            <FontAwesomeIcon icon="file-pdf" style={{ fontSize: "3em" }} />
          </BigButton>
          <BigButton
            type="primary"
            title="Enregistrer au format docx"
            onClick={this.exportWord}
          >
            <FontAwesomeIcon icon="file-word" style={{ fontSize: "3em" }} />
          </BigButton>
          <BigButton
            type="primary"
            title="Enregistrer au format html"
            onClick={this.exportHtml}
          >
            <FontAwesomeIcon icon="code" style={{ fontSize: "3em" }} />
          </BigButton>
        </span>
      </MyContainer>
    );
  }
}

export default ReportExport;

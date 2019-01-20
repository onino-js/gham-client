import * as React from "react";
import { inject, observer } from "mobx-react";
import { Col } from "antd";

import { UiStore } from "../../../stores/ui/index";
import { AllStores } from "../../../models/all.stores.model";
import styled from "../../../styled-components";
import { htmlReport } from "../../../services/report-generation/report-gerneration.service";
import { ContactStore } from "../../../stores/contact.store";

interface Props {
  contactStore: ContactStore;
  uiStore?: UiStore;
}

const MyContainer: any = styled(Col as any).attrs({
  span: 24,
  id: "preview-container",
})`
  flex: 1;
`;

@inject((allStores: AllStores) => ({
  contactStore: allStores.contactStore,
  uiStore: allStores.uiStore,
}))
@observer
class ReportPreview extends React.Component<Props> {
  state = {
    src: "",
  };
  componentDidMount() {
    const iframe = document.createElement("iframe");
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    const html = htmlReport();
    iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
    document.getElementById("preview-container")!.appendChild(iframe);

    this.setState({ src: htmlReport });
  }
  private preview = () => {
    const htmlString = htmlReport();
    const wnd = window.open("about:blank", "", "_blank");
    wnd!.document.write(htmlString);
  };
  public render() {
    return <MyContainer />;
  }
}

export default ReportPreview;

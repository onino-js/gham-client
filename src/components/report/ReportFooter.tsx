import * as React from "react";
import { inject, observer } from "mobx-react";
import styled from "./../../styled-components";
import { navItems } from "./../../data/nav-items.data";
import { withRouter } from "react-router";
import { Bullet } from "../shared/Bullet/Bullet";
import { _secondary_bg, _primary } from "../../css/_colors";
import { ContactStore } from "../../stores/contact.store";
import { UiStore } from "../../stores/ui/index";
import { Button } from "antd";

interface Props {
  uiStore?: UiStore;
  contactStore?: ContactStore;
  history: any;
  match: any;
  location: any;
}

const Container = styled.div`
  display: flex;
`;

@inject((allStores: any) => ({
  uiStore: allStores.uiStore,
  contactStore: allStores.contactStore,
}))
@observer
class ReportFooter extends React.Component<Props> {
  public state = {
    openKeys: [""],
    activePage: "",
  };

  private selectPage = (page: string, index: number) => {
    this.props.history.push(page);
  };

  private validateStep = () => {
    this.props.contactStore!.validateStep();
  };

  public render() {
    return (
      <Container>
        <Button onClick={this.validateStep}>Valider</Button>
      </Container>
    );
  }
}

export default withRouter(ReportFooter);

import * as React from "react";
import { Layout, Button, message } from "antd";
import styled from "../../styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter } from "react-router";
import { navItems } from "./../../data/nav-items.data";
import { _secondary } from "../../css/_colors";

interface Props {
  uiStore?: any;
  history: any;
  match: any;
  location: any;
}

const FooterMobileButton = styled(Button as any)`
  height: 70px;
  flex: 1;
  margin: 0px;
`;

const FooterMobileContainer = styled(Layout.Footer as any)`
  background-color: ${_secondary};
  display: flex;
  height: 70px;
  text-align: right;
  padding: 0px;
  @media (min-width: 600px) {
    display: none;
  }
`;

class FooterMobile extends React.Component<Props> {
  private goNextPage = () => {
    const page = this.props.location.pathname.replace("/", "");
    if (page === "export") return;
    const newPageIndex =
      navItems.findIndex((item: any) => item.page === page) + 1;
    this.props.history.push(navItems[newPageIndex].page);
  };
  private goPreviousPage = () => {
    const page = this.props.location.pathname.replace("/", "");
    if (page === "general") return;
    const newPageIndex =
      navItems.findIndex((item: any) => item.page === page) - 1;
    this.props.history.push(navItems[newPageIndex].page);
  };
  private validateStep = () => {
    message.success("L'étape est validée");
  };
  public render() {
    return (
      <FooterMobileContainer>
        <FooterMobileButton>
          <FontAwesomeIcon icon="caret-left" style={{ fontSize: "2em" }} />
        </FooterMobileButton>
        <FooterMobileButton onClick={this.goPreviousPage}>
          <FontAwesomeIcon icon="chevron-left" style={{ fontSize: "2em" }} />
        </FooterMobileButton>
        <FooterMobileButton onClick={this.validateStep}>
          <FontAwesomeIcon icon="check" style={{ fontSize: "2em" }} />
        </FooterMobileButton>
        <FooterMobileButton onClick={this.goNextPage}>
          <FontAwesomeIcon icon="chevron-right" style={{ fontSize: "2em" }} />
        </FooterMobileButton>
        <FooterMobileButton>
          <FontAwesomeIcon icon="caret-right" style={{ fontSize: "2em" }} />
        </FooterMobileButton>
      </FooterMobileContainer>
    );
  }
}

export default withRouter(FooterMobile);

import * as React from "react";
import { Layout, Button } from "antd";
import styled from "../../styled-components";
import { withRouter } from "react-router";
import {
  _tertiary_bg,
} from "../../css/_colors";

interface Props {
  uiStore?: any;
  history: any;
  match: any;
  location: any;
}

const FooterContainer = styled(Layout.Footer as any)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 70px;
  width: 100%;
  background-color: ${_tertiary_bg};
  /* @media (min-width: 600px) {
    display: none;
  } */
`;

class Footer extends React.Component<Props> {
  public render() {
    return <FooterContainer>{this.props.children}</FooterContainer>;
  }
}

export default withRouter(Footer);

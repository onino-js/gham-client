import * as React from "react";
import Footer from "./../layout/Footer";
import styled from "../../styled-components";
import { _fullScreen } from "../../css/styled-css";
import { Scrollable } from "../layout/Srollable";
import { Flex } from "../layout/Flex";
import Header from "./Header";
import { ActionBar } from "./ActionBar";
import SideMenu from "./SideMenu";

interface Props {
  header?: React.ReactNode;
  menu?: React.ReactNode;
  actions?: React.ReactNode;
  content?: React.ReactNode;
  footer?: React.ReactNode;
  modals?: React.ReactNode;
}

let Container = styled.div`
  ${_fullScreen}
  display : flex;
  flex-direction: column;
`;

class AppLayout extends React.Component<Props> {
  public render() {
    return (
      <Container>
        <Header>{this.props.header}</Header>
        <Flex>
          <SideMenu>{this.props.menu}</SideMenu>
          <Flex dir="c" style={{ height: "100%" }}>
            <Flex style={{ height: "100%" }}>
              <Scrollable dir="y" p={20}>
                {this.props.content}
              </Scrollable>
              <ActionBar>{this.props.actions}</ActionBar>
            </Flex>
            <Footer>{this.props.footer}</Footer>
          </Flex>
        </Flex>
        {this.props.modals}
      </Container>
    );
  }
}

export default AppLayout;

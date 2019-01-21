import * as React from "react";
import { inject, observer } from "mobx-react";
import { AllStores } from "./../../models/all.stores.model";
import Footer from "./../layout/Footer";
import { RouteComponentProps } from "react-router-dom";
import styled from "../../styled-components";
import { _fullScreen } from "../../css/styled-css";
import { Scrollable } from "../layout/Srollable";
import { Flex } from "../layout/Flex";
import { UiStore } from "../../stores/ui/index";
import { StepWrapper } from "../layout/StepWrapper";
import Header from "./Header";
import MainNavigation from "../shared/MainNavigation";
import { ActionBar } from "./ActionBar";

interface Props {
  uiStore?: UiStore;
  children: React.ReactNode[];
}

let Container = styled.div`
  ${_fullScreen}
  display : flex;
  flex-direction: column;
`;

@inject((allStores: AllStores) => ({
  uiStore: allStores.uiStore,
}))
@observer
class AppLayout extends React.Component<Props> {
  public render() {
    return (
      <Container>
        <Header>
          <MainNavigation />
        </Header>
        <Flex>
          {this.props.children[0]}
          <Flex dir="c" style={{ height: "100%" }}>
            <Flex style={{ height: "100%" }}>
              <Scrollable dir="y" p={20}>
                {this.props.children[1]}
              </Scrollable>
              <ActionBar>{this.props.children[2]}</ActionBar>
            </Flex>
            <Footer>{this.props.children[3]}</Footer>
          </Flex>
        </Flex>
      </Container>
    );
  }
}

export default AppLayout;

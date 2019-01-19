// LIBS IMPORTS
import * as React from "react";
import { inject, observer } from "mobx-react";
import { AllStores } from "./../../models/all.stores.model";
import Footer from "./../layout/Footer";
import ReportRoutes from "./../report/ReportRoutes";
import ReportMenu from "./../report/ReportMenu";
import { RouteComponentProps } from "react-router-dom";
import styled from "../../styled-components";
import { _fullScreen } from "../../css/styled-css";
import { Scrollable } from "../layout/Srollable";
import { Flex } from "../layout/Flex";
import { UiStore } from "../../stores/ui/index";
import ReportHeader from "./ReportHeader";
import { StepWrapper } from "../layout/StepWrapper";
import { Button } from "antd";
import { ContactStore } from "../../stores/contact.store";

interface Props extends RouteComponentProps {
  uiStore?: UiStore;
  contactStore?: ContactStore;
}

let Container = styled.div`
  ${_fullScreen}
  display : flex;
  flex-direction: column;
`;

@inject((allStores: AllStores) => ({
  uiStore: allStores.uiStore,
  contactStore: allStores.contactStore,
}))
@observer
class Report extends React.Component<Props> {
  public state = {
    collapsed: false,
  };

  public render() {
    return (
      <Container>
        <ReportHeader />
        <Flex>
          <ReportMenu />
          <Flex dir="c" style={{ height: "100%" }}>
            <Scrollable dir="y" p={20}>
              <StepWrapper>
                <ReportRoutes />
              </StepWrapper>
            </Scrollable>
            <Footer>
              <Button onClick={this.props.contactStore!.saveInDatabase}>
                SYNCHRONISER{" "}
              </Button>
            </Footer>
          </Flex>
        </Flex>
      </Container>
    );
  }
}

export default Report;

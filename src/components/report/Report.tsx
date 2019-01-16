// LIBS IMPORTS
import * as React from "react";
import { inject, observer } from "mobx-react";
import { AllStores } from "./../../models/all.stores.model";
import Footer from "./../layout/Footer";
import ReportRoutes from "./../report/ReportRoutes";
import ReportMenu from "./../report/ReportMenu";
import FooterMobile from "./../layout/FooterMobile";
import { Content } from "./../shared/Styled";
import SideMenu from "./SideMenu";
import { BrowserRouter as Router } from "react-router-dom";
import ReportNavigation from "./ReportNavigation";
import styled from "../../styled-components";
import {
  _secondary,
  _secondary_bg,
  _primary_bg,
  _tertiary_bg,
} from "../../css/_colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { _fullScreen, _center } from "../../css/styled-css";
import { Scrollable } from "../layout/Srollable";
import { Flex } from "../layout/Flex";
import { UiStore } from "../../stores/ui.store";
import ReportHeader from "./ReportHeader";

interface Props {
  uiStore?: UiStore;
}

const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 70px;
  width: 100%;
  background-color: ${_tertiary_bg};
`;

const HeaderButton = styled.div`
  ${_center}
  height: 70px;
  width: 70px;
  cursor: pointer;
  border-left: 1px solid ${_primary_bg};
  border-right: 1px solid ${_primary_bg};
  font-size: 2em;
  background-color: ${_secondary_bg};
`;

let Container = styled.div`
  ${_fullScreen}
  display : flex;
  flex-direction: column;
`;

@inject((allStores: AllStores) => ({
  uiStore: allStores.uiStore,
}))
@observer
class Report extends React.Component<Props> {
  public state = {
    collapsed: false,
  };

  public render() {
    return (
      <Router>
        <Container>
          <ReportHeader />
          <Flex>
            <SideMenu />
            <ReportMenu />
            <Flex dir="c" style={{ height: "100%" }}>
              <Scrollable dir="y" p={20}>
                <ReportRoutes />
              </Scrollable>
              <Footer>
                <ReportNavigation />
              </Footer>
            </Flex>
          </Flex>

          {/* <FooterMobile /> */}
        </Container>
      </Router>
    );
  }
}

export default Report;

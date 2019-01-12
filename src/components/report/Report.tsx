// LIBS IMPORTS
import * as React from "react";
import { inject, observer } from "mobx-react";
import { AllStores } from "./../../models/all.stores.model";
import Header from "./../layout/Header";
import Footer from "./../layout/Footer";
import ReportRoutes from "./../report/ReportRoutes";
import ReportMenu from "./../report/ReportMenu";
import FooterMobile from "./../layout/FooterMobile";
import { Flex, FlexC, Content } from "./../shared/Styled";
import SideMenu from "./SideMenu";
import { BrowserRouter as Router } from "react-router-dom";
import ReportNavigation from "./ReportNavigation";

interface Props {
  uiStore?: any;
}

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
        <FlexC>
          <Header />
          <Flex>
            <SideMenu />
            <ReportMenu />
            <Content>
              <ReportRoutes />
            </Content>
          </Flex>
          <Footer>
            <ReportNavigation />
          </Footer>
          {/* <FooterMobile /> */}
        </FlexC>
      </Router>
    );
  }
}

export default Report;

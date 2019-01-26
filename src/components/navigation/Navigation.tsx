// LIBS IMPORTS
import * as React from "react";
import { inject, observer } from "mobx-react";
import { AllStores } from "./../../models/all.stores.model";
import styled from "../../styled-components";
import {
  _secondary_bg,
  _primary_bg,
  _tertiary_bg,
  _primary,
} from "../../css/_colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { _center } from "../../css/styled-css";
import { UiStore } from "../../stores/ui/index";
import { withRouter, RouteComponentProps } from "react-router";
import gham from "./../../image/gham-logo2.png";
import { Flex } from "../layout/Flex";
import { Link } from "react-router-dom";
import { DomainStore } from "../../stores/domain";
import { IprojectJSON } from "../../models/project.model";
import QuickNav from "./QuickNav";

interface Props extends RouteComponentProps {
  uiStore?: UiStore;
  domainStore?: DomainStore;
  editedProject?: IprojectJSON;
}

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: space-between;
  height: 70px;
  width: 100%;
  background-color: ${_tertiary_bg};
`;

const HeaderButton: any = styled.div`
  ${_center}
  height: 70px;
  width: 70px;
  cursor: pointer;
  border-left: 1px solid ${_primary_bg};
  border-right: 1px solid ${_primary_bg};
  font-size: 2em;
  /* background-color: ${_secondary_bg}; */
  color: ${(props: any) => (props.active ? _primary : _primary_bg)};
`;

const LeftBox: any = styled(Flex).attrs({
  alignV: "center",
})`
  cursor: pointer;
  flex: 0;
  min-width: 250px;
`;

const RightBox: any = styled(Flex).attrs({
  alignH: "flex-end",
})`
  padding-right: 90px;
  flex: 0;
`;

const CenterBox: any = styled(Flex).attrs({
  alignH: "flex-start",
  alignV: "center",
})`
  flex: 1;
  font-size: 1.5em;
  padding-left: 20px;
`;

const Logo = styled.img.attrs({
  src: gham,
})`
  height: 60px;
  width: auto;
  padding-left: 20px;
`;

@inject((allStores: AllStores) => ({
  uiStore: allStores.uiStore,
  domainStore: allStores.domainStore,
  editedProject: allStores.domainStore.editedProject,
}))
@observer
class Navigation extends React.Component<Props> {
  private goToPage = (path: string) => {
    this.props.history.push(path);
  };

  public render() {
    const path = this.props.location.pathname;
    var dashboardWord = "dashboard";
    const dashboardReg = new RegExp("\\b" + dashboardWord + "\\b");
    var userAccountWord = "user-account";
    const userAccountReg = new RegExp("\\b" + userAccountWord + "\\b");
    const editedReference = this.props.editedProject
      ? this.props.editedProject.reference
      : null;

    return (
      <Container>
        <LeftBox>
          <Link to="/">
            <Logo />
          </Link>
        </LeftBox>
        <CenterBox>
          <QuickNav />
        </CenterBox>
        <RightBox>
          <HeaderButton
            onClick={() => this.goToPage("/dashboard/project-list")}
            active={dashboardReg.test(path)}
          >
            <FontAwesomeIcon icon="home" />
          </HeaderButton>
          <HeaderButton
            onClick={() => this.goToPage("/user-account")}
            active={userAccountReg.test(path)}
          >
            <FontAwesomeIcon icon="user" />
          </HeaderButton>
        </RightBox>
      </Container>
    );
  }
}

export default withRouter(Navigation);

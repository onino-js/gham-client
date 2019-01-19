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
import { withRouter } from "react-router";
import gham from "./../../image/gham-logo2.png";
import { Flex } from "../layout/Flex";
import { Link } from "react-router-dom";

interface Props {
  uiStore?: UiStore;
  history: any;
  match: any;
  location: any;
}

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: space-between;
  height: 70px;
  width: 100%;
  background-color: ${_tertiary_bg};
  padding-right: 20px;
  padding-left: 20px;
`;

const HeaderButton: any = styled.div`
  ${_center}
  height: 70px;
  width: 70px;
  cursor: pointer;
  border-left: 1px solid ${_primary_bg};
  border-right: 1px solid ${_primary_bg};
  font-size: 2em;
  background-color: ${_secondary_bg};
  color: ${(props: any) => (props.active ? _primary : _primary_bg)};
`;

const LeftBox: any = styled(Flex).attrs({
  alignV: "center",
})`
  cursor: pointer;
  flex: 0;
`;

const RightBox: any = styled(Flex).attrs({
  alignH: "flex-end",
})`
  flex: 1;
`;

const Logo = styled.img.attrs({
  src: gham,
})`
  height: 60px;
  width: auto;
`;

@inject((allStores: AllStores) => ({
  uiStore: allStores.uiStore,
}))
@observer
class ReportHeader extends React.Component<Props> {
  public state = {
    collapsed: false,
  };

  private goToPage = (path: string) => {
    this.props.history.push(path);
  };

  public render() {
    const path = this.props.location.pathname;
    return (
      <Container>
        <LeftBox>
          <Link to="/">
            <Logo />
          </Link>
        </LeftBox>
        <RightBox>
          <HeaderButton
            onClick={() => this.goToPage("/report/general")}
            active={path === "/report/general"}
          >
            REF
          </HeaderButton>
          <HeaderButton
            onClick={() => this.goToPage("/report/map")}
            active={path === "/report/map"}
          >
            <FontAwesomeIcon icon="map-marker-alt" />
          </HeaderButton>
          {/* <HeaderButton>
          <FontAwesomeIcon icon="plus" />
        </HeaderButton> */}
          <HeaderButton
            onClick={() => this.goToPage("/report/preview")}
            active={path === "/report/preview"}
          >
            <FontAwesomeIcon icon="eye" />
          </HeaderButton>
          <HeaderButton
            onClick={() => this.goToPage("/report/export")}
            active={path === "/report/export"}
          >
            <FontAwesomeIcon icon="file-download" />
          </HeaderButton>
        </RightBox>
      </Container>
    );
  }
}

export default withRouter(ReportHeader);

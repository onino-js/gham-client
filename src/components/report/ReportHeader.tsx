// LIBS IMPORTS
import * as React from "react";
import { inject, observer } from "mobx-react";
import { AllStores } from "./../../models/all.stores.model";
import styled from "../../styled-components";
import {
  _secondary,
  _secondary_bg,
  _primary_bg,
  _tertiary_bg,
  _primary,
} from "../../css/_colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { _center } from "../../css/styled-css";
import { UiStore } from "../../stores/ui/index";
import { withRouter } from "react-router";
import { Menu, Dropdown } from "antd";

interface Props {
  uiStore?: UiStore;
  history: any;
  match: any;
  location: any;
}

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 70px;
  width: 100%;
  background-color: ${_tertiary_bg};
  padding-right: 70px;
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
        <HeaderButton
          onClick={() => this.goToPage("/general")}
          active={path === "/general"}
        >
          <FontAwesomeIcon icon="map-marker-alt" />
        </HeaderButton>
        <HeaderButton
          onClick={() => this.goToPage("/map")}
          active={path === "/map"}
        >
          <FontAwesomeIcon icon="map-marker-alt" />
        </HeaderButton>
        <HeaderButton>
          <FontAwesomeIcon icon="plus" />
        </HeaderButton>
        <HeaderButton
          onClick={() => this.goToPage("/preview")}
          active={path === "/preview"}
        >
          <FontAwesomeIcon icon="search" />
        </HeaderButton>
        <HeaderButton
          onClick={() => this.goToPage("/export")}
          active={path === "/export"}
        >
          <FontAwesomeIcon icon="file-download" />
        </HeaderButton>
      </Container>
    );
  }
}

export default withRouter(ReportHeader);

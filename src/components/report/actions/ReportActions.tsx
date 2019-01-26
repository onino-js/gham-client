// LIBS IMPORTS
import * as React from "react";
import { inject, observer } from "mobx-react";
import { AllStores } from "./../../../models/all.stores.model";
import styled from "../../../styled-components";
import {
  _secondary_bg,
  _primary_bg,
  _tertiary_bg,
  _primary,
} from "../../../css/_colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { _center } from "../../../css/styled-css";
import { UiStore } from "../../../stores/ui/index";
import { withRouter } from "react-router";
import gham from "./../../image/gham-logo2.png";
import { Flex } from "../../layout/Flex";
import { Link } from "react-router-dom";
import { ActionButton } from "../../shared/Buttons";

interface Props {
  uiStore?: UiStore;
  history: any;
  match: any;
  location: any;
}

@inject((allStores: AllStores) => ({
  uiStore: allStores.uiStore,
}))
@observer
class ReportActions extends React.Component<Props> {
  public state = {
    collapsed: false,
  };

  private goToPage = (path: string) => {
    this.props.history.push(path);
  };

  public render() {
    const path = this.props.location.pathname;
    return (
      <React.Fragment>
        <ActionButton
          onClick={() => this.goToPage("/report/preview")}
          enabled={1}
        >
          <FontAwesomeIcon icon="eye" />
        </ActionButton>
        <ActionButton
          onClick={() => this.goToPage("/report/export")}
          active={path === "/report/export" ? 1 : 0}
        >
          <FontAwesomeIcon icon="file-download" />
        </ActionButton>
      </React.Fragment>
    );
  }
}

export default withRouter(ReportActions);

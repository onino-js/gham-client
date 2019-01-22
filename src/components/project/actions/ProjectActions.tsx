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
import { UiStore } from "../../../stores/ui/index";
import { withRouter, RouteComponentProps } from "react-router";
import { ActionButton } from "../../shared/Buttons";
import { DomainStore } from "../../../stores/domain";

interface Props extends RouteComponentProps {
  uiStore?: UiStore;
  domainStore?: DomainStore;
}

@inject((allStores: AllStores) => ({
  uiStore: allStores.uiStore,
  domainStore: allStores.domainStore,
}))
@observer
class ProjectFooter extends React.Component<Props> {
  private goToPage = (path: string) => {
    this.props.history.push(path);
  };
  private createReport = () => {
    this.props.domainStore!.createReport();
  };

  public render() {
    return (
      <React.Fragment>
        <ActionButton
          onClick={this.createReport}
          active={false}
          enabled={true}
          disabled={false}
        >
          <FontAwesomeIcon icon="plus" />
        </ActionButton>
        <ActionButton
          onClick={() => this.goToPage("/report")}
          active={false}
          enabled={true}
          disabled={false}
        >
          <FontAwesomeIcon icon="edit" />
        </ActionButton>
        <ActionButton
          onClick={() => this.goToPage("/project/preview")}
          disabled={true}
          enabled={false}
        >
          <FontAwesomeIcon icon="eye" />
        </ActionButton>
        <ActionButton
          onClick={() => this.goToPage("/project/export")}
          disabled={true}
          enabled={false}
        >
          <FontAwesomeIcon icon="file-download" />
        </ActionButton>
      </React.Fragment>
    );
  }
}

export default withRouter(ProjectFooter);

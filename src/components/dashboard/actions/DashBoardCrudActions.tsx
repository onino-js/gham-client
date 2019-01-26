import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { inject, observer } from "mobx-react";
import { AllStores } from "./../../../models/all.stores.model";
import { ActionButton } from "../../shared/Buttons";
import { DomainStore } from "../../../stores/domain";
import { withRouter, RouteComponentProps } from "react-router";

interface Props extends RouteComponentProps {
  domainStore?: DomainStore;
}

@inject((allStores: AllStores) => ({
  domainStore: allStores.domainStore,
}))
@observer
class DashBoardCrudActions extends React.Component<Props> {
  private editReport = () => {
    this.props.history.push("/report/contact");
  };
  private cloneReport = () => {
    this.props.domainStore!.cloneReport();
  };
  public render(): React.ReactNode {
    const allowAction = this.props.domainStore!.selectedReportId !== null;
    return (
      <React.Fragment>
        <ActionButton
          onClick={this.props.domainStore!.requestAddReport}
          s={70}
          enabled={1}
        >
          <FontAwesomeIcon icon="plus" />
        </ActionButton>
        <ActionButton
          onClick={this.editReport}
          s={70}
          enabled={allowAction ? 1 : 0}
          disabled={!allowAction}
        >
          <FontAwesomeIcon icon="edit" />
        </ActionButton>
        <ActionButton
          onClick={this.cloneReport}
          s={70}
          enabled={allowAction ? 1 : 0}
          disabled={!allowAction}
        >
          <FontAwesomeIcon icon="clone" />
        </ActionButton>
        <ActionButton
          onClick={this.props.domainStore!.requestRemoveReport}
          s={70}
          enabled={allowAction ? 1 : 0}
          disabled={!allowAction}
        >
          <FontAwesomeIcon icon="trash" />
        </ActionButton>
      </React.Fragment>
    );
  }
}

export default withRouter(DashBoardCrudActions);

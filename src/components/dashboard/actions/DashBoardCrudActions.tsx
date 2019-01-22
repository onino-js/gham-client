import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { inject, observer } from "mobx-react";
import { AllStores } from "./../../../models/all.stores.model";
import { ActionButton } from "../../shared/Buttons";
import { DashBoardStore } from "../../../stores/dashboard";
import { withRouter, RouteComponentProps } from "react-router";

interface Props extends RouteComponentProps {
  dashBoardStore?: DashBoardStore;
}

@inject((allStores: AllStores) => ({
  dashBoardStore: allStores.dashBoardStore,
}))
@observer
class DashBoardCrudActions extends React.Component<Props> {
  private editProject = () => {
    this.props.history.push("/project");
  };
  private cloneProject = () => {};
  public render(): React.ReactNode {
    const allowAction = this.props.dashBoardStore!.selectedProjectId !== null;
    return (
      <React.Fragment>
        <ActionButton
          onClick={this.props.dashBoardStore!.requestAddProject}
          s={70}
          enabled={true}
        >
          <FontAwesomeIcon icon="plus" />
        </ActionButton>
        <ActionButton
          onClick={this.editProject}
          s={70}
          enabled={allowAction}
          disabled={!allowAction}
        >
          <FontAwesomeIcon icon="edit" />
        </ActionButton>
        <ActionButton
          onClick={this.cloneProject}
          s={70}
          enabled={false}
          disabled={true}
          // enabled={allowAction}
          // disabled={!allowAction}
        >
          <FontAwesomeIcon icon="clone" />
        </ActionButton>
        <ActionButton
          onClick={this.props.dashBoardStore!.requestRemoveProject}
          s={70}
          enabled={allowAction}
          disabled={!allowAction}
        >
          <FontAwesomeIcon icon="trash" />
        </ActionButton>
      </React.Fragment>
    );
  }
}

export default withRouter(DashBoardCrudActions);

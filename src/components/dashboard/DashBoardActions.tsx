import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { inject, observer } from "mobx-react";
import { AllStores } from "./../../models/all.stores.model";
import { ActionButton } from "../shared/Buttons";
import { DashBoardStore } from "../../stores/dashboard";
import { withRouter, RouteComponentProps } from "react-router";

interface Props extends RouteComponentProps {
  dashBoardStore?: DashBoardStore;
}

@inject((allStores: AllStores) => ({
  dashBoardStore: allStores.dashBoardStore,
}))
@observer
class DashBoardActions extends React.Component<Props> {
  private addItem = () => {};
  private editItem = () => {
    this.props.history.push("/project");
  };
  private removeItem = () => {};
  private cloneItem = () => {};

  public render(): React.ReactNode {
    const allowAction = this.props.dashBoardStore!.selectedObject.id !== null;
    return (
      <React.Fragment>
        <ActionButton onClick={this.addItem} s={70} enabled={true}>
          <FontAwesomeIcon icon="plus" style={{ fontSize: "2em" }} />
        </ActionButton>
        <ActionButton
          onClick={this.editItem}
          s={70}
          enabled={allowAction}
          disabled={!allowAction}
        >
          <FontAwesomeIcon icon="edit" style={{ fontSize: "2em" }} />
        </ActionButton>
        <ActionButton
          onClick={this.cloneItem}
          s={70}
          enabled={allowAction}
          disabled={!allowAction}
        >
          <FontAwesomeIcon icon="clone" style={{ fontSize: "2em" }} />
        </ActionButton>
        <ActionButton
          onClick={this.removeItem}
          s={70}
          enabled={allowAction}
          disabled={!allowAction}
        >
          <FontAwesomeIcon icon="trash" style={{ fontSize: "2em" }} />
        </ActionButton>
      </React.Fragment>
    );
  }
}

export default withRouter(DashBoardActions);

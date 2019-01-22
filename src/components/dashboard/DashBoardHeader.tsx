import * as React from "react";
import MainNavigation from "../shared/MainNavigation";
import { withRouter, RouteComponentProps } from "react-router";

interface Props extends RouteComponentProps {}

class DashBoardHeader extends React.Component<Props> {
  public render() {
    return (
      <React.Fragment>
        <MainNavigation />
      </React.Fragment>
    );
  }
}

export default withRouter(DashBoardHeader);

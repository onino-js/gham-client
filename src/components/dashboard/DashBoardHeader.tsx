import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import Navigation from "../navigation/Navigation";

interface Props extends RouteComponentProps {}

class DashBoardHeader extends React.Component<Props> {
  public render() {
    return (
      <React.Fragment>
        <Navigation />
      </React.Fragment>
    );
  }
}

export default withRouter(DashBoardHeader);

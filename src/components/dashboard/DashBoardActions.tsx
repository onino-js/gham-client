import * as React from "react";
import { withRouter, RouteComponentProps, Route } from "react-router";
import pages from "./pages";
import DashBoardComponents from "./DashBoardComponents";

interface Props extends RouteComponentProps {}

class DashBoardActions extends React.Component<Props> {
  public render(): React.ReactNode {
    return (
      <React.Fragment>
        {DashBoardComponents.map((page: any) => (
          <Route
            exact
            key={page.link}
            path={`/dashboard/${page.link}`}
            component={page.actions}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default withRouter(DashBoardActions);

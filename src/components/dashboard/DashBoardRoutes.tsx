import * as React from "react";
import { Route } from "react-router-dom";
import pages from "./pages";

interface Props {
  uiStore?: any;
  match?: any;
}

class DashBoardRoutes extends React.Component<Props> {
  public render() {
    return (
      <React.Fragment>
        {pages.map((page: any) => (
          <Route
            exact
            key={page.link}
            path={`/dashboard/${page.link}`}
            component={page.component}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default DashBoardRoutes;

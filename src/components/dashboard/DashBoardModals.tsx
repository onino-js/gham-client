import * as React from "react";
import { Route } from "react-router";
import DashBoardComponents from "./DashBoardComponents";
import { IpageComponent } from "../../models/layout.models";

interface Props {}

class DashBoardModals extends React.Component<Props> {
  public render(): React.ReactNode {
    return (
      <React.Fragment>
        {DashBoardComponents.map((page: IpageComponent) => (
          <Route
            exact
            key={page.link}
            path={`/dashboard/${page.link}`}
            component={page.modals}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default DashBoardModals;

import * as React from "react";
import { Route } from "react-router-dom";
import userAccountPages from "./pages";

interface Props {
  uiStore?: any;
  match?: any;
}

class UserAccountRoutes extends React.Component<Props> {
  public render() {
    return (
      <React.Fragment>
        {userAccountPages.map((page: any) => (
          <Route
            exact
            key={page.link}
            path={`/user-account/${page.link}`}
            component={page.component}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default UserAccountRoutes;

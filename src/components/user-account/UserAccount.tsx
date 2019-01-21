import * as React from "react";
import AppLayout from "../layout/AppLayout";
import UserAccountMenu from "./UserAccountMenu";
import UserAccountRoutes from "./UserAccountRoutes";
import UserAccountFooter from "./UserAccountFooter";

interface Props {}

class UserAccount extends React.Component<Props> {
  public render() {
    return (
      <AppLayout>
        {[
          <UserAccountMenu key="user-account" />,
          <UserAccountRoutes key="user-account-routes" />,
          <div />,
          <UserAccountFooter key="user-account-footer" />,
        ]}
      </AppLayout>
    );
  }
}

export default UserAccount;

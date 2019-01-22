import * as React from "react";
import { inject, observer } from "mobx-react";
import { withRouter, RouteComponentProps } from "react-router";
import { ReportStore } from "../../stores/report";
import { UiStore } from "../../stores/ui/index";
import SideMenu from "../layout/SideMenu";
import MenuItem from "../shared/MenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Ipage } from "../dashboard/pages";
import userAccountPages from "./pages";

interface Props extends RouteComponentProps {
  uiStore?: UiStore;
  reportStore?: ReportStore;
}

@inject((allStores: any) => ({
  uiStore: allStores.uiStore,
  reportStore: allStores.reportStore,
}))
@observer
class UserAccountMenu extends React.Component<Props> {
  private selectPage = (page: string) => {
    this.props.history.push(`/user-account/${page}`);
  };

  public render() {
    return (
      <SideMenu>
        {userAccountPages.map((page: Ipage) => (
          <MenuItem
            key={page.link}
            page={page.link}
            active={
              this.props.location.pathname === `/user-account/${page.link}`
            }
            onClick={this.selectPage}
            size="large"
          >
            {[
              <FontAwesomeIcon
                icon={page.icon}
                key="menu-icon"
                style={{ fontSize: "2em" }}
              />,
              <React.Fragment key="menu-title">{page.title}</React.Fragment>,
            ]}
          </MenuItem>
        ))}
      </SideMenu>
    );
  }
}

export default withRouter(UserAccountMenu);

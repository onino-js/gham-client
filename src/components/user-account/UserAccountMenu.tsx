import * as React from "react";
import { inject, observer } from "mobx-react";
import styled from "./../../styled-components";
import { withRouter, RouteComponentProps } from "react-router";
import { _secondary_bg, _primary } from "../../css/_colors";
import { ContactStore } from "../../stores/contact.store";
import { UiStore } from "../../stores/ui/index";
import SideMenu from "../layout/SideMenu";
import MenuItem from "../shared/MenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import projectPages from "./pages";
import { Ipage } from "../dashboard/pages";
import userAccountPages from "./pages";

interface Props extends RouteComponentProps {
  uiStore?: UiStore;
  contactStore?: ContactStore;
}

const Title = styled.div`
  line-height: 50px;
  flex: 1;
  padding-left: 5px;
  font-weight: 900;
`;

@inject((allStores: any) => ({
  uiStore: allStores.uiStore,
  contactStore: allStores.contactStore,
}))
@observer
class UserAccountMenu extends React.Component<Props> {
  public state = {
    openKeys: [""],
    activePage: "",
  };

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

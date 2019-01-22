import * as React from "react";
import { inject, observer } from "mobx-react";
import styled from "./../../styled-components";
import { withRouter, RouteComponentProps } from "react-router";
import { ContactStore } from "../../stores/contact.store";
import { UiStore } from "../../stores/ui/index";
import SideMenu from "../layout/SideMenu";
import MenuItem from "../shared/MenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import projectPages from "./pages";
import { Ipage } from "../dashboard/pages";

interface Props extends RouteComponentProps {
  uiStore?: UiStore;
  contactStore?: ContactStore;
}

@inject((allStores: any) => ({
  uiStore: allStores.uiStore,
  contactStore: allStores.contactStore,
}))
@observer
class ProjectMenu extends React.Component<Props> {
  private selectPage = (page: string) => {
    this.props.history.push(`${this.props.match.url}/${page}`);
  };

  public render() {
    return (
      <SideMenu>
        {projectPages.map((page: Ipage) => (
          <MenuItem
            key={page.link}
            page={page.link}
            active={this.props.location.pathname === `/dashboard/${page.link}`}
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

export default withRouter(ProjectMenu);

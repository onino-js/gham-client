import * as React from "react";
import { inject, observer } from "mobx-react";
import styled from "./../../styled-components";
import { withRouter, RouteComponentProps } from "react-router";
import { _secondary_bg, _primary } from "../../css/_colors";
import { ContactStore } from "../../stores/contact.store";
import { UiStore } from "../../stores/ui/index";
import SideMenu from "../layout/SideMenu";
import MenuItem from "../shared/MenuItem";
import pages, { Ipage } from "./pages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DomainStore } from "../../stores/domain";
import DashBoardComponents from "./DashBoardComponents";

interface Props extends RouteComponentProps {
  uiStore?: UiStore;
  contactStore?: ContactStore;
  domainStore?: DomainStore;
}

@inject((allStores: any) => ({
  uiStore: allStores.uiStore,
  contactStore: allStores.contactStore,
  domainStore: allStores.domainStore,
}))
@observer
class DashBoardMenu extends React.Component<Props> {
  public state = {
    openKeys: [""],
    activePage: "",
  };

  private selectPage = (page: string) => {
    this.props.domainStore!.resetSelection();
    this.props.history.push(`/dashboard/${page}`);
  };

  public render() {
    const activePage = this.props.uiStore!.activePage;
    return (
      <SideMenu>
        {DashBoardComponents.map((page: Ipage) => (
          <MenuItem
            key={page.link}
            page={page.link}
            active={activePage === page.link}
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

export default withRouter(DashBoardMenu);

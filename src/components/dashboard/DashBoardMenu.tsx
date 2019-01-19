import * as React from "react";
import { inject, observer } from "mobx-react";
import styled from "./../../styled-components";
import { withRouter, RouteComponentProps } from "react-router";
import { _secondary_bg, _primary } from "../../css/_colors";
import { ContactStore } from "../../stores/contact.store";
import { UiStore } from "../../stores/ui/index";
import SideMenu from "../layout/SideMenu";
import MenuItem from "../shared/MenuItem";

interface Props extends RouteComponentProps {
  uiStore?: UiStore;
  contactStore?: ContactStore;
}

const TitleBox = styled.div`
  line-height: 50px;
  flex: 1;
  padding-left: 5px;
  font-weight: 900;
`;

const ItemBox: any = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  color: ${(props: any) => (props.active ? _primary : "#FFF")};
  cursor: pointer;
  :hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
  :active {
    background-color: #fff;
  }
`;

@inject((allStores: any) => ({
  uiStore: allStores.uiStore,
  contactStore: allStores.contactStore,
}))
@observer
class DashBoardMenu extends React.Component<Props> {
  public state = {
    openKeys: [""],
    activePage: "",
  };

  private selectPage = (page: string) => {
    this.props.history.push(`${this.props.match.url}/${page}`);
  };

  public render() {
    return (
      <SideMenu>
        <MenuItem
          page={`new-project`}
          active={this.props.location.pathname === `/dashboard/new-project`}
          onClick={this.selectPage}
        >
          {[<div />, <TitleBox>Nouveau Projet</TitleBox>, <div />]}
        </MenuItem>
        <MenuItem
          page={`user-lists`}
          active={this.props.location.pathname === `/dashboard/user-lists`}
          onClick={this.selectPage}
        >
          {[<div />, <TitleBox>Mes listes</TitleBox>, <div />]}
        </MenuItem>
      </SideMenu>
    );
  }
}

export default withRouter(DashBoardMenu);

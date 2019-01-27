import * as React from "react";
import { inject, observer } from "mobx-react";
import styled from "./../../styled-components";
import { _secondary_bg } from "../../css/_colors";
import { UiStore } from "../../stores/ui/index";

interface Props {
  uiStore?: UiStore;
}

const Container = styled.div`
  width: 250px;
  height: 100%;
  overflow-y: auto;
  background-color: ${_secondary_bg};
  @media (max-width: 800px) {
    transition: all 0.5s;
    width: 70px;
  }
`;

@inject((allStores: any) => ({
  uiStore: allStores.uiStore,
}))
@observer
class SideMenu extends React.Component<Props> {
  public state = {
    openKeys: [""],
    activePage: "",
  };

  public render() {
    return <Container>{this.props.children}</Container>;
  }
}

export default SideMenu;

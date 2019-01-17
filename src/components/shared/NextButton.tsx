import * as React from "react";
import { Button } from "antd";
import { inject, observer } from "mobx-react";
import styled from "./../../styled-components";
import { navItems } from "./../../data/nav-items.data";
import { withRouter } from "react-router";

interface Props {
  history: any;
  match: any;
  location: any;
  disabled?: boolean;
  size?: any;
}

@inject((allStores: any) => ({
  uiStore: allStores.uiStore,
}))
@observer
class NextButton extends React.Component<Props> {
  public state = {
    openKeys: [""],
  };

  private goNext = () => {
    this.props.history.push("map");
  };
  public render() {
    return (
      <Button size={this.props.size || "default"} onClick={this.goNext}>
        CONTINUER
      </Button>
    );
  }
}

export default withRouter(NextButton);

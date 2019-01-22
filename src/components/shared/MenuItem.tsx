import * as React from "react";
import { inject, observer } from "mobx-react";
import styled from "./../../styled-components";
import { withRouter, RouteComponentProps } from "react-router";
import { _primary } from "../../css/_colors";
import { ReportStore } from "../../stores/report";
import { UiStore } from "../../stores/ui/index";

interface Props extends RouteComponentProps {
  uiStore?: UiStore;
  reportStore?: ReportStore;
  children: [React.ReactNode, React.ReactNode];
  active?: boolean;
  onClick?: (page: string) => void;
  page: string;
  size?: "large" | "normal" | "small";
}

const TitleBox = styled.div`
  line-height: 50px;
  flex: 1;
  font-weight: 900;
`;

const IconBox = styled.div`
  padding-left: 20px;
  padding-right: 20px;
`;

const ItemBox: any = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${(props: any) =>
    props.size === "large"
      ? "70px"
      : props.size === "normal"
      ? "50px"
      : props.size === "small"
      ? "30px"
      : "50px"};
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
  reportStore: allStores.reportStore,
}))
@observer
class MenuItem extends React.Component<Props> {
  private onClick = (e: any) => {
    this.props.onClick && this.props.onClick(this.props.page);
  };
  public render() {
    return (
      <ItemBox
        active={this.props.active}
        onClick={this.onClick}
        size={this.props.size}
      >
        {[
          <IconBox key="item-icon">{this.props.children[0]}</IconBox>,
          <TitleBox key="item-title">{this.props.children[1]}</TitleBox>,
        ]}
      </ItemBox>
    );
  }
}

export default withRouter(MenuItem);

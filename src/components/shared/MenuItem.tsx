import * as React from "react";
import { inject, observer } from "mobx-react";
import styled from "./../../styled-components";
import { withRouter, RouteComponentProps } from "react-router";
import { _primary } from "../../css/_colors";
import { ContactStore } from "../../stores/contact.store";
import { UiStore } from "../../stores/ui/index";

interface Props extends RouteComponentProps {
  uiStore?: UiStore;
  contactStore?: ContactStore;
  children: [React.ReactNode, React.ReactNode, React.ReactNode];
  active?: boolean;
  onClick?: (page: string) => void;
  page: string;
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
class MenuItem extends React.Component<Props> {
  private onClick = (e: any) => {
    this.props.onClick && this.props.onClick(this.props.page);
  };
  public render() {
    return (
      <ItemBox active={this.props.active} onClick={this.onClick}>
        {[
          this.props.children[0],
          <TitleBox>{this.props.children[1]}</TitleBox>,
          this.props.children[2],
        ]}
      </ItemBox>
    );
  }
}

export default withRouter(MenuItem);

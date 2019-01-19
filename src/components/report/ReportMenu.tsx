import * as React from "react";
import { inject, observer } from "mobx-react";
import styled from "./../../styled-components";
import { withRouter, RouteComponentProps } from "react-router";
import { Bullet } from "../shared/Bullet/Bullet";
import { _secondary_bg, _primary } from "../../css/_colors";
import { ContactStore } from "../../stores/contact.store";
import { UiStore } from "../../stores/ui/index";
import { Link } from "react-router-dom";

interface Props extends RouteComponentProps {
  uiStore?: UiStore;
  contactStore?: ContactStore;
  history: any;
  match: any;
  location: any;
}

const Container = styled.div`
  width: 300px;
  height: 100%;
  overflow-y: auto;
  background-color: ${_secondary_bg};
  @media (max-width: 600px) {
    display: none;
  }
`;

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
class ReportMenu extends React.Component<Props> {
  public state = {
    openKeys: [""],
    activePage: "",
  };

  private selectPage = (page: string, index: number) => {
    this.props.history.push(`${this.props.match.url}/${page}`);
  };

  public render() {
    return (
      <Container>
        {this.props.uiStore!.steps.map((step, index) => {
          const active =
            this.props.location.pathname === `/report/${step.page}`;
          return (
            <ItemBox
              key={index}
              active={active}
              onClick={() => this.selectPage(step.page, index)}
            >
              <Bullet
                status={
                  step.status === "done" ? "done" : active ? "pending" : "todo"
                }
              />
              <TitleBox>{step.title}</TitleBox>
            </ItemBox>
          );
        })}
      </Container>
    );
  }
}

export default withRouter(ReportMenu);

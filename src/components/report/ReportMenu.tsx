import * as React from "react";
import { inject, observer } from "mobx-react";
import styled from "./../../styled-components";
import { withRouter, RouteComponentProps } from "react-router";
import { Bullet } from "../shared/Bullet/Bullet";
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

@inject((allStores: any) => ({
  uiStore: allStores.uiStore,
  contactStore: allStores.contactStore,
}))
@observer
class ReportMenu extends React.Component<Props> {
  private selectPage = (page: string) => {
    this.props.history.push(`${this.props.match.url}/${page}`);
  };

  public render() {
    return (
      <SideMenu>
        {this.props.uiStore!.steps.map(step => {
          const active =
            this.props.location.pathname === `/report/${step.page}`;
          return (
            <MenuItem
              page={step.page}
              active={active}
              onClick={this.selectPage}
            >
              {[
                <Bullet
                  status={
                    step.status === "done"
                      ? "done"
                      : active
                      ? "pending"
                      : "todo"
                  }
                />,
                <TitleBox>{step.title}</TitleBox>,
                <div />,
              ]}
            </MenuItem>
          );
        })}
      </SideMenu>
    );
  }
}

export default withRouter(ReportMenu);

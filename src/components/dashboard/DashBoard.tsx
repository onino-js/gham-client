import * as React from "react";
import AppLayout from "../layout/AppLayout2";
import DashBoardComponents from "./DashBoardComponents";
import { Route, RouteComponentProps } from "react-router";
import Navigation from "../navigation/Navigation";
import MenuItem from "../shared/MenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReportStore } from "../../stores/report";
import { DomainStore } from "../../stores/domain";
import { inject, observer } from "mobx-react";
import { IpageComponent } from "../../models/layout.models";

interface Props extends RouteComponentProps {
  activePage?: string;
  reportStore?: ReportStore;
  domainStore?: DomainStore;
}

@inject((allStores: any) => ({
  reportStore: allStores.reportStore,
  domainStore: allStores.domainStore,
  activePage: allStores.uiStore.activePage,
}))
@observer
class DashBoard extends React.Component<Props> {
  private selectPage = (page: string) => {
    this.props.domainStore!.resetSelection();
    this.props.history.push(`/dashboard/${page}`);
  };

  public render() {
    return (
      <AppLayout
        header={<Navigation key="dashboard-header" />}
        menu={
          <React.Fragment>
            {DashBoardComponents.map((page: any) => (
              <MenuItem
                key={page.link}
                page={page.link}
                active={this.props.activePage! === page.link}
                onClick={this.selectPage}
                size="large"
              >
                {[
                  <FontAwesomeIcon
                    icon={page.icon}
                    key="menu-icon"
                    style={{ fontSize: "2em" }}
                  />,
                  <React.Fragment key="menu-title">
                    {page.title}
                  </React.Fragment>,
                ]}
              </MenuItem>
            ))}
          </React.Fragment>
        }
        content={
          <React.Fragment>
            {DashBoardComponents.map((page: any) => (
              <Route
                exact
                key={page.link}
                path={`/dashboard/${page.link}`}
                component={page.component}
              />
            ))}
          </React.Fragment>
        }
        actions={
          <React.Fragment>
            {DashBoardComponents.map((page: any) => (
              <Route
                exact
                key={page.link}
                path={`/dashboard/${page.link}`}
                component={page.actions}
              />
            ))}
          </React.Fragment>
        }
        footer={<React.Fragment>PRO-REPORTER V1</React.Fragment>}
        modals={
          <React.Fragment>
            {DashBoardComponents.map((page: IpageComponent) => (
              <Route
                exact
                key={page.link}
                path={`/dashboard/${page.link}`}
                component={page.modals}
              />
            ))}
          </React.Fragment>
        }
      />
    );
  }
}

export default DashBoard;

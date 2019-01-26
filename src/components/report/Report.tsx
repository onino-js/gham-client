import * as React from "react";
import { inject, observer } from "mobx-react";
import AppLayout from "../layout/AppLayout2";
import Navigation from "../navigation/Navigation";
import MenuItem from "../shared/MenuItem";
import { Bullet } from "../shared/Bullet/Bullet";
import { RouteComponentProps, Route } from "react-router";
import { ReportStore } from "../../stores/report";
import { DomainStore } from "../../stores/domain";
import ReportRoutes from "./ReportRoutes";
import ReportActions from "./actions/ReportActions";
import { steps } from "../../stores/ui/steps";
import ReportFooter from "./ReportFooter";
import { StepWrapper } from "../layout/StepWrapper";

interface Props extends RouteComponentProps {
  activePage?: string;
  reportStore?: ReportStore;
  domainStore?: DomainStore;
}

@inject((allStores: any) => ({
  reportStore: allStores.reportStore,
  domainStore: allStores.domainStore,
  activePage: allStores.activePage,
}))
@observer
class Report extends React.Component<Props> {
  componentDidMount() {
    this.props.reportStore!.initialize();
  }
  componentWillUnmount() {
    this.props.domainStore!.updateReport();
  }
  private selectPage = (page: string) => {
    this.props.history.push(`${this.props.match.url}/${page}`);
  };
  public render() {
    return (
      <AppLayout
        header={<Navigation key="dashboard-header" />}
        menu={
          <React.Fragment>
            {steps.map(step => {
              const active =
                this.props.location.pathname === `/report/${step.page}`;
              return (
                <MenuItem
                  page={step.page}
                  active={active}
                  onClick={this.selectPage}
                  key={step.page}
                >
                  {[
                    <Bullet
                      key="bullet"
                      status={
                        step.status === "done"
                          ? "done"
                          : active
                          ? "pending"
                          : "todo"
                      }
                    />,
                    <React.Fragment key="menu-title">
                      {step.title}
                    </React.Fragment>,
                  ]}
                </MenuItem>
              );
            })}
          </React.Fragment>
        }
        content={
          <StepWrapper>
            <ReportRoutes />
          </StepWrapper>
        }
        actions={<ReportActions />}
        footer={<ReportFooter />}
        modals={<React.Fragment />}
      />
    );
  }
}

export default Report;

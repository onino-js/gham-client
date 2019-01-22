import * as React from "react";
import { UiStore } from "../../stores/ui";
import { UserStore } from "../../stores/user";
import { inject, observer } from "mobx-react";
import AppLayout from "../layout/AppLayout";
import ReportMenu from "./ReportMenu";
import ReportRoutes from "./ReportRoutes";
import ReportFooter from "./ReportFooter";
import { StepWrapper } from "../layout/StepWrapper";

interface Props {
  uiStore?: UiStore;
  userStore?: UserStore;
}

@inject((allStores: any) => ({
  uiStore: allStores.uiStore,
  userStore: allStores.userStore,
  domainStore: allStores.domainStore,
}))
@observer
class Report extends React.Component<Props> {
  componentDidMount() {
    // getProjectsList(console.log);
  }
  public render() {
    return (
      <AppLayout>
        {[
          <ReportMenu key="report" />,
          <StepWrapper key="report-routes">
            <ReportRoutes />
          </StepWrapper>,
          <div />,
          <ReportFooter />,
        ]}
      </AppLayout>
    );
  }
}

export default Report;

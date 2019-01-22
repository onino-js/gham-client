import * as React from "react";
import AppLayout from "../layout/AppLayout2";
import DashBoardMenu from "./DashBoardMenu";
import DashBoardContent from "./DashBoardContent";
import DashBoardActions from "./DashBoardActions";
import DashBoardFooter from "./DashBoardFooter";
import DashBoardHeader from "./DashBoardHeader";
import DashBoardModals from "./DashBoardModals";

interface Props {}

class DashBoard extends React.Component<Props> {
  public render() {
    return (
      <AppLayout
        header={<DashBoardHeader key="dashboard-header" />}
        menu={<DashBoardMenu key="dashboard-menu" />}
        content={<DashBoardContent key="dashboard-content" />}
        actions={<DashBoardActions key="dashboard-actions" />}
        footer={<DashBoardFooter key="dashboard-footer" />}
        modals={<DashBoardModals key="dashboard-footer" />}
      />
    );
  }
}

export default DashBoard;

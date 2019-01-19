import * as React from "react";
import { Flex } from "./../layout/Flex";
import { UiStore } from "../../stores/ui";
import { UserStore } from "../../stores/user";
import { inject, observer } from "mobx-react";
import { getProjectsList } from "../../services/firebase.service";
import AppLayout from "../layout/AppLayout";
import DashBoardMenu from "./DashBoardMenu";
import DashBoardRoutes from "./DashBoardRoutes";

interface Props {
  uiStore?: UiStore;
  userStore?: UserStore;
}

@inject((allStores: any) => ({
  uiStore: allStores.uiStore,
  userStore: allStores.userStore,
  projectStore: allStores.projectStore,
}))
@observer
class DashBoard extends React.Component<Props> {
  componentDidMount() {
    // getProjectsList(console.log);
  }
  public render() {
    return (
      <AppLayout>
        {[<DashBoardMenu />, <DashBoardRoutes />, <div>rien</div>]}
      </AppLayout>
    );
  }
}

export default DashBoard;

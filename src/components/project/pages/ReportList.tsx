import * as React from "react";
import { Flex } from "./../../layout/Flex";
import { UiStore } from "../../../stores/ui";
import { UserStore } from "../../../stores/user";
import { inject, observer } from "mobx-react";
import { ProjectStore } from "../../../stores/projects";

interface Props {
  uiStore?: UiStore;
  userStore?: UserStore;
  projectStore?: ProjectStore;
}

@inject((allStores: any) => ({
  uiStore: allStores.uiStore,
  userStore: allStores.userStore,
  projectStore: allStores.projectStore,
}))
@observer
class ReportList extends React.Component<Props> {
  public render() {
    return (
      <Flex dir="c">
        <h1>Liste des rapports</h1>
      </Flex>
    );
  }
}

export default ReportList;

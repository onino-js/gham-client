import * as React from "react";
import { Flex } from "./../../../layout/Flex";
import { UiStore } from "../../../../stores/ui";
import { UserStore } from "../../../../stores/user";
import { inject, observer } from "mobx-react";
import { AllStores } from "../../../../models/all.stores.model";
import ProjectItem from "./ProjectItem";

interface Props {
  uiStore?: UiStore;
  userStore?: UserStore;
  projectList?: string[];
}

@inject((allStores: AllStores) => ({
  uiStore: allStores.uiStore,
  projectList: allStores.projectStore.projectList,
}))
@observer
class ProjectItems extends React.Component<Props> {
  public render() {
    return (
      <Flex dir="c">
        {this.props.projectList!.map((projectId: string) => {
          return <ProjectItem key={projectId} projectId={projectId} />;
        })}
      </Flex>
    );
  }
}

export default ProjectItems;

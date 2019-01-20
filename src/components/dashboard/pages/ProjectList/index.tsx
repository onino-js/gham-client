import * as React from "react";
import { Flex } from "./../../../layout/Flex";
import { inject, observer } from "mobx-react";
import NoProject from "./NoProject";
import ProjectItems from "./ProjectItems";
import { Project } from "../../../../stores/projects/project";
import Loading from "../../../shared/Loading";
import { AllStores } from "../../../../models/all.stores.model";

interface Props {
  projects?: Project[];
  loaded?: boolean;
}

@inject((allStores: AllStores) => ({
  projects: allStores.projectStore.projects,
  loaded: allStores.projectStore.loaded,
}))
@observer
class ProjectList extends React.Component<Props> {
  public render() {
    const loaded: boolean = this.props.loaded!;
    return (
      <Flex dir="c">
        <h2> Mes Projets </h2>
        {!loaded ? (
          <Loading />
        ) : this.props.projects!.length === 0 ? (
          <NoProject />
        ) : (
          <ProjectItems />
        )}
      </Flex>
    );
  }
}

export default ProjectList;

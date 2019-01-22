import * as React from "react";
import { Flex } from "./../../../layout/Flex";
import { inject, observer } from "mobx-react";
import NoProject from "./NoProject";
import ProjectItems from "./ProjectItems";
import { Project } from "../../../../stores/projects/project";
import Loading from "../../../shared/Loading";
import { AllStores } from "../../../../models/all.stores.model";
import { DashBoardStore } from "../../../../stores/dashboard";
import { isEmpty } from "../../../../services/app.service";

interface Props {
  projects?: Project[];
  loaded?: boolean;
  dashBoardStore?: DashBoardStore;
}

@inject((allStores: AllStores) => ({
  projects: allStores.projectStore.projects,
  loaded: allStores.projectStore.loaded,
  dashBoardStore: allStores.dashBoardStore,
}))
@observer
class ProjectList extends React.Component<Props> {
  componentDidMount() {
    this.props.dashBoardStore!.setProp({
      key: "activePage",
      value: "project",
    });
  }
  componentWillUnmount() {
    this.props.dashBoardStore!.setProp({
      key: "activePage",
      value: null,
    });
  }
  public render() {
    const loaded: boolean = this.props.loaded!;
    return (
      <Flex dir="c">
        <h2> Mes Projets </h2>
        {!loaded ? (
          <Loading />
        ) : isEmpty(this.props.projects!) ? (
          <NoProject />
        ) : (
          <ProjectItems />
        )}
      </Flex>
    );
  }
}

export default ProjectList;

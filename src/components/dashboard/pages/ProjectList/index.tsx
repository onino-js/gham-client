import * as React from "react";
import { Flex } from "./../../../layout/Flex";
import { inject, observer } from "mobx-react";
import NoProject from "./NoProject";
import ProjectItems from "./ProjectItems";
import Loading from "../../../shared/Loading";
import { AllStores } from "../../../../models/all.stores.model";
import { DashBoardStore } from "../../../../stores/dashboard";
import { isEmpty } from "../../../../services/app.service";
import { IprojectJSON } from "../../../../models/project.model";
import { PrimaryTitle } from "../../../shared/Styled";
import { UiStore } from "../../../../stores/ui";

interface Props {
  projects?: { [key: string]: IprojectJSON };
  loaded?: boolean;
  dashBoardStore?: DashBoardStore;
  uiStore?: UiStore;
}

@inject((allStores: AllStores) => ({
  projects: allStores.dashBoardStore.projects,
  uiStore: allStores.uiStore,
  loaded: allStores.dashBoardStore.loaded,
  dashBoardStore: allStores.dashBoardStore,
}))
@observer
class ProjectList extends React.Component<Props> {
  componentWillMount() {
    this.props.uiStore!.setActivePage("project-list");
  }
  public render() {
    const loaded: boolean = this.props.loaded!;
    return (
      <Flex dir="c" alignH="center">
        <PrimaryTitle> Mes Projets </PrimaryTitle>
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

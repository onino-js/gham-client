import * as React from "react";
import { Flex } from "./../../../layout/Flex";
import { inject, observer } from "mobx-react";
import NoProject from "./NoProject";
import ProjectItems from "./ProjectItems";
import Loading from "../../../shared/Loading";
import { AllStores } from "../../../../models/all.stores.model";
import { DomainStore } from "../../../../stores/domain";
import { isEmpty } from "../../../../services/app.service";
import { IprojectJSON } from "../../../../models/project.model";
import { PrimaryTitle } from "../../../shared/Styled";
import { UiStore } from "../../../../stores/ui";

interface Props {
  projects?: { [key: string]: IprojectJSON };
  loaded?: boolean;
  domainStore?: DomainStore;
  uiStore?: UiStore;
}

@inject((allStores: AllStores) => ({
  projects: allStores.domainStore.projects,
  uiStore: allStores.uiStore,
  loaded: allStores.domainStore.projectLoaded,
  domainStore: allStores.domainStore,
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

import * as React from "react";
import { UiStore } from "../../stores/ui";
import { UserStore } from "../../stores/user";
import { inject, observer } from "mobx-react";
import AppLayout from "../layout/AppLayout";
import ProjectRoutes from "./ProjectRoutes";
import ProjectMenu from "./ProjectMenu";
import ProjectFooter from "./ProjectFooter";

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
class ProjectHome extends React.Component<Props> {
  componentDidMount() {
    // getProjectList(console.log);
  }
  public render() {
    return (
      <AppLayout>
        {[
          <ProjectMenu key="project" />,
          <ProjectRoutes key="project-routes" />,
          <ProjectFooter key="project-footer" />,
        ]}
      </AppLayout>
    );
  }
}

export default ProjectHome;

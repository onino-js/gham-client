import * as React from "react";
import AppLayout from "../layout/AppLayout2";
import ProjectContent from "./ProjectContent";
import ProjectMenu from "./ProjectMenu";
import ProjectFooter from "./ProjectFooter";
import ProjectActions from "./actions/ProjectActions";
import Navigation from "../navigation/Navigation";

interface Props {}

class ProjectHome extends React.Component<Props> {
  public render() {
    return (
      <AppLayout
        header={<Navigation key="project-header" />}
        menu={<ProjectMenu key="project-menu" />}
        content={<ProjectContent key="project-content" />}
        actions={<ProjectActions key="project-actions" />}
        footer={<ProjectFooter key="project-footer" />}
      />
    );
  }
}

export default ProjectHome;

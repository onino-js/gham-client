import * as React from "react";
import { Route } from "react-router-dom";
import { ProjectComponents } from "./ProjectComponents";

interface Props {
  uiStore?: any;
  match?: any;
}

class ProjectContent extends React.Component<Props> {
  public render() {
    return (
      <React.Fragment>
        {ProjectComponents.map((page: any) => (
          <Route
            exact
            key={page.link}
            path={`/project/${page.link}`}
            component={page.component}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default ProjectContent;

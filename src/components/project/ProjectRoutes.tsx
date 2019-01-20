import * as React from "react";
import { Route } from "react-router-dom";
import projectPages from "./pages";

interface Props {
  uiStore?: any;
  match?: any;
}

class ProjectRoutes extends React.Component<Props> {
  public render() {
    return (
      <React.Fragment>
        {projectPages.map((page: any) => (
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

export default ProjectRoutes;

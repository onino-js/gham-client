import * as React from "react";
import NewProject from "./modals/NewProject";
import RemoveProject from "./modals/RemoveProject";

interface Props {}

class DashBoardFooter extends React.Component<Props> {
  public render() {
    return (
      <React.Fragment>
        <NewProject />
        <RemoveProject />
      </React.Fragment>
    );
  }
}

export default DashBoardFooter;

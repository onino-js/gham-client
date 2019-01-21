import * as React from "react";
import { inject, observer } from "mobx-react";
import { AllStores } from "../../../../models/all.stores.model";
import { Project } from "../../../../stores/projects/project";
import { Col } from "antd";
import { formatDate } from "../../../../services/app.service";
import { TableRow } from "../../../shared/Tables";
import { Iobject, DashBoardStore } from "../../../../stores/dashboard";

interface Props {
  projectId: any;
  project?: Project;
  dashBoardStore?: DashBoardStore;
}

const col1 = {
  xl: 6,
  md: 6,
  xs: 6,
  style: {
    fontWeight: 900,
    letterSpacing: "5px",
    fontSize: "1.2em",
  },
};
const col2 = {
  xl: 6,
  md: 6,
  xs: 6,
};
const col3 = {
  xl: 6,
  md: 6,
  xs: 6,
};
const col4 = {
  xl: 3,
  md: 3,
  xs: 3,
};
const col5 = {
  xl: 3,
  md: 3,
  xs: 3,
};

@inject((allStores: AllStores, props: Props) => ({
  project: allStores.projectStore.projects[props.projectId],
  userStore: allStores.userStore,
  dashBoardStore: allStores.dashBoardStore,
}))
@observer
class ProjectItem extends React.Component<Props> {
  private selectObject = () => {
    this.props.dashBoardStore!.setProp({
      key: "selectedObject",
      value: {
        id: this.props.projectId,
      },
    });
  };
  public render() {
    const project = this.props.project!;
    const active =
      this.props.dashBoardStore!.selectedObject!.id === this.props.projectId;
    return (
      <TableRow hover={true} active={active} onClick={this.selectObject}>
        <Col {...col1}>{project.reference}</Col>
        <Col {...col2}>{formatDate(project.projectDate)}</Col>
        <Col {...col3}>{formatDate(project.projectDate)}</Col>
        <Col {...col4}>{project.numberOfReports}</Col>
        <Col {...col5}>{project.status}</Col>
      </TableRow>
    );
  }
}

export default ProjectItem;

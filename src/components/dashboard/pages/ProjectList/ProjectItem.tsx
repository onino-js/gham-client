import * as React from "react";
import { Flex } from "./../../../layout/Flex";
import { inject, observer } from "mobx-react";
import { AllStores } from "../../../../models/all.stores.model";
import { Project } from "../../../../stores/projects/project";
import { Row, Col } from "antd";
import { formatDate } from "../../../../services/app.service";

interface Props {
  projectId: any;
  project?: Project;
}

const colAttrs = {
  xl: 4,
  xs: 4,
};

@inject((allStores: AllStores, props: Props) => ({
  project: allStores.projectStore.projects[props.projectId],
  userStore: allStores.userStore,
}))
@observer
class ProjectItem extends React.Component<Props> {
  public render() {
    const project = this.props.project!;
    return (
      <Row>
        <Col {...colAttrs}>{project.reference}</Col>
        <Col {...colAttrs}>{formatDate(project.projectDate)}</Col>
        <Col {...colAttrs}>{formatDate(project.projectDate)}</Col>
        <Col {...colAttrs}>{formatDate(project.projectDate)}</Col>
        <Col {...colAttrs}>{formatDate(project.projectDate)}</Col>
        <Col {...colAttrs}>{formatDate(project.projectDate)}</Col>
      </Row>
    );
  }
}

export default ProjectItem;

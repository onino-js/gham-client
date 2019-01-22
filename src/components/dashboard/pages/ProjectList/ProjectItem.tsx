import * as React from "react";
import { inject, observer } from "mobx-react";
import { AllStores } from "../../../../models/all.stores.model";
import { Col } from "antd";
import { formatDate } from "../../../../services/app.service";
import { TableRow } from "../../../shared/Tables";
import { DomainStore } from "../../../../stores/domain";
import { IprojectJSON } from "../../../../models/project.model";
import styled from "styled-components";
import { withRouter, RouteComponentProps } from "react-router";

interface Props extends RouteComponentProps {
  projectId: any;
  project?: IprojectJSON;
  domainStore?: DomainStore;
}

const col1 = {
  xl: 6,
  md: 6,
  xs: 6,
};
const col2 = {
  xl: 6,
  lg: 6,
  md: 6,
  sm: 6,
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

const RefBox = styled.div`
  font-weight: 900;
  letter-spacing: 5px;
  font-size: 1.2em;
  padding-left: 20px;
`;

const StatusBox = styled.div`
  margin: auto;
  text-align: center;
`;

@inject((allStores: AllStores, props: Props) => ({
  project: allStores.domainStore.projects[props.projectId],
  userStore: allStores.userStore,
  domainStore: allStores.domainStore,
}))
@observer
class ProjectItem extends React.Component<Props> {
  private selectObject = () => {
    this.props.domainStore!.setSelectedProjectId(this.props.projectId);
  };
  private goToProject = () => {
    this.props.domainStore!.setSelectedProjectId(this.props.projectId);
    this.props.history.push("/project/project-general");
  };
  public render() {
    const project = this.props.project!;
    const active =
      this.props.domainStore!.selectedProjectId! === this.props.projectId;
    return (
      <TableRow
        hover={true}
        active={active}
        onClick={this.selectObject}
        onDoubleClick={this.goToProject}
      >
        <Col {...col1}>
          <RefBox>{project.reference}</RefBox>
        </Col>
        <Col {...col2}>{formatDate(project.projectDate)}</Col>
        <Col {...col3}>{formatDate(project.projectDate)}</Col>
        <Col {...col4}>
          <StatusBox>{project.numberOfReports}</StatusBox>
        </Col>
        <Col {...col5}>
          <StatusBox>{project.status}</StatusBox>
        </Col>
      </TableRow>
    );
  }
}

export default withRouter(ProjectItem);

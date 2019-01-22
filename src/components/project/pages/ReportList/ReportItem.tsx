import * as React from "react";
import { inject, observer } from "mobx-react";
import { AllStores } from "../../../../models/all.stores.model";
import { Col } from "antd";
import { formatDate } from "../../../../services/app.service";
import { TableRow } from "../../../shared/Tables";
import styled from "styled-components";
import { withRouter, RouteComponentProps } from "react-router";
import { DomainStore } from "../../../../stores/domain";

interface Props extends RouteComponentProps {
  reportId: any;
  report?: any;
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
  report: allStores.domainStore.reports[props.reportId],
  userStore: allStores.userStore,
  domainStore: allStores.domainStore,
}))
@observer
class ReportItem extends React.Component<Props> {
  private selectObject = () => {
    this.props.domainStore!.setSelectedReportId(this.props.reportId);
  };
  private goToReport = () => {
    // this.props.domainStore!.setSelectedReportId(this.props.reportId);
    this.props.history.push("/report/");
  };
  public render() {
    const report = this.props.report!;
    const active =
      this.props.domainStore!.selectedReportId! === this.props.reportId;
    return (
      <TableRow
        hover={true}
        active={active}
        onClick={this.selectObject}
        onDoubleClick={this.goToReport}
      >
        <Col {...col1}>
          <RefBox>{report.reference}</RefBox>
        </Col>
        <Col {...col2}>{formatDate(report.creationDate)}</Col>
        <Col {...col3}>{formatDate(report.lastModifDate)}</Col>
        <Col {...col4}>
          <StatusBox />
        </Col>
        <Col {...col5}>
          <StatusBox>{report.status}</StatusBox>
        </Col>
      </TableRow>
    );
  }
}

export default withRouter(ReportItem);

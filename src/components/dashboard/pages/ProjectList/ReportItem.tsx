import * as React from "react";
import { inject, observer } from "mobx-react";
import { AllStores } from "../../../../models/all.stores.model";
import { Col } from "antd";
import { formatDate } from "../../../../services/app.service";
import { TableRow } from "../../../shared/Tables";
import { DomainStore } from "../../../../stores/domain";
import { IreportJSON } from "../../../../models/report.model";
import styled from "styled-components";
import { withRouter, RouteComponentProps } from "react-router";

interface Props extends RouteComponentProps {
  reportId: any;
  report?: IreportJSON;
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
  xl: 3,
  md: 3,
  xs: 3,
};
const col4 = {
  xl: 6,
  md: 6,
  xs: 6,
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
`;

const StatusBox = styled.div`
  margin: auto;
  text-align: center;
`;

@inject((allStores: AllStores, props: Props) => ({
  report: allStores.domainStore.reports![props.reportId],
  userStore: allStores.userStore,
  domainStore: allStores.domainStore,
}))
@observer
class ReportItem extends React.Component<Props> {
  private selectObject = () => {
    this.props.domainStore!.setSelectedReportId(this.props.reportId);
  };
  private goToReport = () => {
    this.props.domainStore!.setSelectedReportId(this.props.reportId);
    this.props.history.push("/report/contact");
  };
  public render() {
    const report = this.props.report!;
    const active =
      this.props.domainStore!.selectedReportId! === this.props.reportId;
    return (
      <TableRow
        hover={1}
        active={active ? 1 : 0}
        onClick={this.selectObject}
        onDoubleClick={this.goToReport}
      >
        <Col {...col1}>
          <RefBox>{report.reference}</RefBox>
        </Col>
        <Col {...col2}>{formatDate(report.creationDate)}</Col>
        <Col {...col3}>{report.city || "X"}</Col>
        <Col {...col4}>
          <StatusBox>{report.address || "X"}</StatusBox>
        </Col>
        <Col {...col5}>
          <StatusBox>{report.status}</StatusBox>
        </Col>
      </TableRow>
    );
  }
}

export default withRouter(ReportItem);

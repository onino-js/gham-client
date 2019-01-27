import * as React from "react";
import { Flex } from "./../../../layout/Flex";
import { inject, observer } from "mobx-react";
import NoProject from "./NoReport";
import Loading from "../../../shared/Loading";
import { AllStores } from "../../../../models/all.stores.model";
import { DomainStore } from "../../../../stores/domain";
import { isEmpty } from "../../../../services/app.service";
import { IreportJSON } from "../../../../models/report.model";
import { PrimaryTitle } from "../../../shared/Texts";
import { UiStore } from "../../../../stores/ui";
import ReportItem from "./ReportItem";
import { Col } from "antd";
import { TableRow } from "../../../shared/Tables";

interface Props {
  reports?: { [key: string]: IreportJSON };
  loaded?: boolean;
  domainStore?: DomainStore;
  uiStore?: UiStore;
}

export const wrapperAttrs = {
  xs: 24,
  sm: 24,
  md: 24,
  lg: 24,
  xl: 16,
};

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

@inject((allStores: AllStores) => ({
  reports: allStores.domainStore.reports,
  uiStore: allStores.uiStore,
  loaded: allStores.domainStore.reportsLoaded,
  domainStore: allStores.domainStore,
}))
@observer
class ProjectList extends React.Component<Props> {
  componentWillMount() {
    this.props.uiStore!.setActivePage("report-list");
  }
  public render() {
    const loaded: boolean = this.props.loaded!;
    return (
      <Flex dir="c" alignH="center">
        <PrimaryTitle> Mes Rapports </PrimaryTitle>
        {!loaded ? (
          <Loading />
        ) : isEmpty(this.props.reports!) ? (
          <NoProject />
        ) : (
          <Flex dir="c" alignH="center" style={{ width: "100%" }}>
            <Col {...wrapperAttrs}>
              <TableRow header={1}>
                <Col {...col1}>Réference</Col>
                <Col {...col2}>Date création</Col>
                <Col {...col3}>Ville</Col>
                <Col {...col4}>Adresse</Col>
                <Col {...col5} />
              </TableRow>
              {Object.keys(this.props.reports!).map((key: string) => (
                <ReportItem key={key} reportId={key} />
              ))}
              {/* {Object.keys(this.props.reports!).map((reportId: string) => {
            return <ProjectItem key={reportId} reportId={reportId} />;
          })} */}
            </Col>
          </Flex>
        )}
      </Flex>
    );
  }
}

export default ProjectList;

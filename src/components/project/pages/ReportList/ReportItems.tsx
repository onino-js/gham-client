import * as React from "react";
import { Flex } from "./../../../layout/Flex";
import { UiStore } from "../../../../stores/ui";
import { UserStore } from "../../../../stores/user";
import { inject, observer } from "mobx-react";
import { AllStores } from "../../../../models/all.stores.model";
import ReportItem from "./ReportItem";
import { Col } from "antd";

interface Props {
  uiStore?: UiStore;
  userStore?: UserStore;
  reports?: any;
}

const wrapperAttrs = {
  xs: 24,
  sm: 24,
  md: 24,
  lg: 18,
  xl: 16,
};

const col1 = {
  xl: 5,
  md: 5,
  xs: 5,
};
const col2 = {
  xl: 5,
  md: 5,
  xs: 5,
};
const col3 = {
  xl: 5,
  md: 5,
  xs: 5,
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
const col6 = {
  xl: 3,
  md: 3,
  xs: 3,
};

@inject((allStores: AllStores) => ({
  uiStore: allStores.uiStore,
  reports: allStores.projectStore.reports,
}))
@observer
class ReportItems extends React.Component<Props> {
  public render() {
    console.log(this.props.reports);
    return (
      <Flex dir="c" alignH="center" style={{ width: "100%" }}>
        <Col {...wrapperAttrs}>
          {/* <TableRow>
            <Col {...col1}>Réference</Col>
            <Col {...col2}>Date création</Col>
            <Col {...col3}>Dernière modif.</Col>
            <Col {...col4} />
            <Col {...col5} />
            <Col {...col6} />
          </TableRow> */}
          {Object.keys(this.props.reports!).map((key: string) => (
            <ReportItem key={key} reportId={key} />
          ))}
        </Col>
      </Flex>
    );
  }
}

export default ReportItems;

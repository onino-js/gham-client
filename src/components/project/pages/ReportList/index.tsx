import * as React from "react";
import { Flex } from "./../../../layout/Flex";
import { inject, observer } from "mobx-react";
import NoReport from "./NoReport";
import ReportItems from "./ReportItems";
import Loading from "../../../shared/Loading";
import { AllStores } from "../../../../models/all.stores.model";
import { isEmpty } from "../../../../services/app.service";
import { IprojectJSON } from "../../../../models/project.model";
import { PrimaryTitle } from "../../../shared/Styled";
import { DomainStore } from "../../../../stores/domain";
import { UiStore } from "../../../../stores/ui";

interface Props {
  reports?: { [key: string]: IprojectJSON };
  loaded?: boolean;
  domainStore?: DomainStore;
  uiStore?: UiStore;
}

@inject((allStores: AllStores) => ({
  reports: allStores.domainStore.reports,
  loaded: allStores.domainStore.reportsLoaded,
  domainStore: allStores.domainStore,
  uiStore: allStores.uiStore,
}))
@observer
class ReportList extends React.Component<Props> {
  componentWillMount() {
    this.props.uiStore!.setActivePage("report-list");
    this.props.domainStore!.loadRequest();
  }
  public render() {
    const loaded: boolean = this.props.loaded!;
    return (
      <Flex dir="c" alignH="center">
        <PrimaryTitle> Liste des rapports </PrimaryTitle>
        {!loaded ? (
          <Loading />
        ) : isEmpty(this.props.reports!) ? (
          <NoReport />
        ) : (
          <ReportItems />
        )}
      </Flex>
    );
  }
}

export default ReportList;

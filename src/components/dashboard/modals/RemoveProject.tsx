import * as React from "react";
import { Flex } from "./../../layout/Flex";
import { UiStore } from "../../../stores/ui";
import { UserStore } from "../../../stores/user";
import { inject, observer } from "mobx-react";
import { Button, Modal } from "antd";
import { DomainStore } from "../../../stores/domain";

interface Props {
  uiStore?: UiStore;
  userStore?: UserStore;
  showRemoveReport?: boolean;
  domainStore?: DomainStore;
}

@inject((allStores: any) => ({
  uiStore: allStores.uiStore,
  userStore: allStores.userStore,
  domainStore: allStores.domainStore,
  showRemoveReport: allStores.domainStore.showRemoveReport,
}))
@observer
class RemoveReport extends React.Component<Props> {
  componentDidMount() {}
  private removeReport = () => {
    this.props.domainStore!.deleteReport();
    this.handleCancel();
  };
  private handleCancel = () => {
    this.props.domainStore!.closeRemoveReport();
  };
  public render() {
    return (
      <Modal
        visible={this.props.showRemoveReport}
        closable={false}
        footer={[
          <Button onClick={this.handleCancel}>ANNULER</Button>,
          <Button type="primary" onClick={this.removeReport}>
            SUPPRIMER
          </Button>,
        ]}
      >
        <Flex dir="c">Etes vous sûr de vouloir supprimer le projet ?</Flex>
      </Modal>
    );
  }
}

export default RemoveReport;

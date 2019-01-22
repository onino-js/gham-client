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
  showRemoveProject?: boolean;
  domainStore?: DomainStore;
}

@inject((allStores: any) => ({
  uiStore: allStores.uiStore,
  userStore: allStores.userStore,
  domainStore: allStores.domainStore,
  showRemoveProject: allStores.domainStore.showRemoveProject,
}))
@observer
class RemoveProject extends React.Component<Props> {
  componentDidMount() {}
  private removeProject = () => {
    this.props.domainStore!.deleteProject(
      this.props.domainStore!.selectedProjectId,
    );
    this.handleCancel();
  };
  private handleCancel = () => {
    this.props.domainStore!.closeRemoveProject();
  };
  public render() {
    return (
      <Modal
        visible={this.props.showRemoveProject}
        closable={false}
        footer={[
          <Button onClick={this.handleCancel}>ANNULER</Button>,
          <Button type="primary" onClick={this.removeProject}>
            SUPPRIMER
          </Button>,
        ]}
      >
        <Flex dir="c">Etes vous sûr de vouloir supprimer le projet ?</Flex>
      </Modal>
    );
  }
}

export default RemoveProject;

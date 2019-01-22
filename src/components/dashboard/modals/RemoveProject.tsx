import * as React from "react";
import { Flex } from "./../../layout/Flex";
import { UiStore } from "../../../stores/ui";
import { UserStore } from "../../../stores/user";
import { inject, observer } from "mobx-react";
import { Button, Modal } from "antd";
import { ProjectStore } from "../../../stores/projects";
import { DashBoardStore } from "../../../stores/dashboard";

interface Props {
  uiStore?: UiStore;
  userStore?: UserStore;
  projectStore?: ProjectStore;
  showRemoveProject?: boolean;
  dashBoardStore?: DashBoardStore;
}

@inject((allStores: any) => ({
  uiStore: allStores.uiStore,
  userStore: allStores.userStore,
  projectStore: allStores.projectStore,
  showRemoveProject: allStores.dashBoardStore.showRemoveProject,
  dashBoardStore: allStores.dashBoardStore,
}))
@observer
class RemoveProject extends React.Component<Props> {
  componentDidMount() {}
  private removeProject = () => {
    this.props.dashBoardStore!.deleteProject(
      this.props.dashBoardStore!.selectedProjectId,
    );
    this.handleCancel();
  };
  private handleCancel = () => {
    this.props.dashBoardStore!.closeRemoveProject();
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

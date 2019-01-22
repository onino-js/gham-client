import * as React from "react";
import { Flex } from "./../../layout/Flex";
import { UiStore } from "../../../stores/ui";
import { UserStore } from "../../../stores/user";
import { inject, observer } from "mobx-react";
import { Input, Button, Modal } from "antd";
import styled from "styled-components";
import { ProjectStore } from "../../../stores/projects";
import { DashBoardStore } from "../../../stores/dashboard";
import { _primary_bg, _error } from "../../../css/_colors";

interface Props {
  uiStore?: UiStore;
  userStore?: UserStore;
  projectStore?: ProjectStore;
  showNewProject?: boolean;
  dashBoardStore?: DashBoardStore;
}

const ErrorMessage: any = styled.div`
  font-size: 0.9em;
  color: ${(props: any) => (props.show ? _error : _primary_bg)};
  width: 100%;
  text-align: center;
  margin-top: 30px;
`;

const RefInput = styled(Input as any)`
  letter-spacing: 10px;
  text-align: center;
  font-size: 1.5em;
  font-weight: 600;
`;

@inject((allStores: any) => ({
  uiStore: allStores.uiStore,
  userStore: allStores.userStore,
  projectStore: allStores.projectStore,
  showNewProject: allStores.dashBoardStore.showNewProject,
  dashBoardStore: allStores.dashBoardStore,
}))
@observer
class NewProject extends React.Component<Props> {
  componentDidMount() {}
  private setNewReference = (e: any) => {
    this.props.projectStore!.setNewReference(e.currentTarget.value);
  };
  private createProject = () => {
    this.props.projectStore!.create();
    this.handleCancel();
  };
  private handleCancel = () => {
    this.props.dashBoardStore!.setProp({
      key: "showNewProject",
      value: false,
    });
    this.props.projectStore!.setNewReference("");
  };
  public render() {
    const isReferenceValid = this.props.projectStore!.isReferenceValid;
    const showMesage =
      !isReferenceValid && this.props.projectStore!.newReference !== "";
    return (
      <Modal
        visible={this.props.showNewProject}
        closable={false}
        footer={[
          <Button onClick={this.handleCancel}>ANNULER</Button>,
          <Button
            type="primary"
            onClick={this.createProject}
            disabled={!isReferenceValid}
          >
            OK
          </Button>,
        ]}
      >
        <Flex dir="c">
          <Flex dir="c">
            <h2>Entrez la référence du projet</h2>
            <RefInput
              value={this.props.projectStore!.newReference}
              onChange={this.setNewReference}
            />
            <ErrorMessage show={showMesage}>
              Veuillez rentrer un nombre à 7 chiffres
            </ErrorMessage>
          </Flex>
        </Flex>
      </Modal>
    );
  }
}

export default NewProject;

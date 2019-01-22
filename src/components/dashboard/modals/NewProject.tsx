import * as React from "react";
import { Flex } from "./../../layout/Flex";
import { UiStore } from "../../../stores/ui";
import { UserStore } from "../../../stores/user";
import { inject, observer } from "mobx-react";
import { Input, Button, Modal } from "antd";
import styled from "styled-components";
import { DomainStore } from "../../../stores/domain";
import { _primary_bg, _error } from "../../../css/_colors";

interface Props {
  uiStore?: UiStore;
  userStore?: UserStore;
  showNewProject?: boolean;
  domainStore?: DomainStore;
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
  domainStore: allStores.domainStore,
  showNewProject: allStores.domainStore.showNewProject,
}))
@observer
class NewProject extends React.Component<Props> {
  componentDidMount() {}
  private setNewReference = (e: any) => {
    this.props.domainStore!.setNewReference(e.currentTarget.value);
  };
  private createProject = () => {
    this.props.domainStore!.createProject();
    this.props.domainStore!.setSelectedProjectId(null);
    this.handleCancel();
  };
  private handleCancel = () => {
    this.props.domainStore!.closeNewReference();
    this.props.domainStore!.setNewReference("");
  };
  public render() {
    const isReferenceValid = this.props.domainStore!.isReferenceValid;
    const showMesage =
      !isReferenceValid && this.props.domainStore!.newReference !== "";
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
              value={this.props.domainStore!.newReference}
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

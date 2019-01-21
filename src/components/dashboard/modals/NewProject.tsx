import * as React from "react";
import { Flex } from "./../../layout/Flex";
import { UiStore } from "../../../stores/ui";
import { UserStore } from "../../../stores/user";
import { inject, observer } from "mobx-react";
import { Input, Button } from "antd";
import styled from "styled-components";
import { ProjectStore } from "../../../stores/projects";

interface Props {
  uiStore?: UiStore;
  userStore?: UserStore;
  projectStore?: ProjectStore;
}

const ButtonWrapper: any = styled.div`
  display: ${(props: any) => (props.isValid ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
`;

const ErrorMessage = styled.div`
  font-size: 0.9em;
  color: red;
  width: 100%;
  text-align: center;
`;

@inject((allStores: any) => ({
  uiStore: allStores.uiStore,
  userStore: allStores.userStore,
  projectStore: allStores.projectStore,
}))
@observer
class NewProject extends React.Component<Props> {
  componentDidMount() {}
  private setNewReference = (e: any) => {
    this.props.projectStore!.setNewReference(e.currentTarget.value);
  };
  private createProject = () => {
    this.props.projectStore!.create();
  };
  public render() {
    const isReferenceValid = this.props.projectStore!.isReferenceValid;
    return (
      <Flex dir="c">
        <Flex dir="c">
          <h2>Entrez la référence du projet</h2>
          <Input
            value={this.props.projectStore!.newReference}
            onChange={this.setNewReference}
          />
          {!isReferenceValid &&
            this.props.projectStore!.newReference !== "" && (
              <ErrorMessage>
                Veuillez rentrer un nombre à 7 chiffres
              </ErrorMessage>
            )}
          <ButtonWrapper isValid={isReferenceValid ? 1 : 0}>
            <Button
              disabled={!isReferenceValid}
              onClick={this.createProject}
              size={"large"}
            >
              CREER LE PROJET
            </Button>
          </ButtonWrapper>
        </Flex>
      </Flex>
    );
  }
}

export default NewProject;

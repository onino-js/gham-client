import * as React from "react";
import { Flex } from "./../../layout/Flex";
import { UiStore } from "../../../stores/ui";
import { UserStore } from "../../../stores/user";
import { inject, observer } from "mobx-react";
import { getProjectsList } from "../../../services/firebase.service";
import { Input, Button } from "antd";
import styled from "styled-components";

interface Props {
  uiStore?: UiStore;
  userStore?: UserStore;
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
  componentDidMount() {
    getProjectsList(console.log);
  }
  setNewProjectId = (e: any) => {
    this.props.userStore!.setProp({
      key: "newProjectId",
      value: e.currentTarget.value,
    });
  };
  public render() {
    const isProjectIdValid = this.props.userStore!.isProjectIdValid;
    return (
      <Flex dir="c">
        <Flex dir="c">
          <h2>Mes affaires</h2>
          <h2>Créer une nouvelle affaire</h2>
          <Input
            value={this.props.userStore!.newProjectId}
            onChange={this.setNewProjectId}
          />
          {!isProjectIdValid && this.props.userStore!.newProjectId !== "" && (
            <ErrorMessage>Veuillez rentrer un nombre à 7 chiffres</ErrorMessage>
          )}
          <ButtonWrapper isValid={isProjectIdValid ? 1 : 0}>
            <Button disabled={!isProjectIdValid} size={"large"} />
          </ButtonWrapper>
        </Flex>
      </Flex>
    );
  }
}

export default NewProject;

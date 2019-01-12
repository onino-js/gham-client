import * as React from "react";
import { Input, Col, Menu, Dropdown } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { observer, inject } from "mobx-react";

import styled from "../../styled-components";
import { MyRow } from "./../shared/Styled";
import { ProjectStore } from "../../stores/project.store";
import { UiStore } from "../../stores/ui.store";
import NextButton from "./../shared/NextButton";
import { _primary, _secondary, _success, _error } from "../../css/_colors";

interface Props {
  uiStore: UiStore;
  projectStore?: ProjectStore;
}

const MyContainer: any = styled(Col as any).attrs({
  span: 24,
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

const Title = styled.div`
  font-size: 2em;
  font-weight: 900;
  padding-top: 10px;
  padding-bottom: 10px;
  color: ${_secondary};
`;

const MyInput: any = styled(Input as any)`
  border-radius: 0;
  border-color: ${(props: any) => (props.haschanged ? _primary : _secondary)};
  letter-spacing: 5px;
`;

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

const ColLayout: any = styled(Col as any).attrs({
  xs: 24,
  sm: 20,
  md: 20,
  lg: 20,
  xl: 10,
})`
  margin: 0 auto 0 auto;
`;

const InputCol: any = styled(Col as any).attrs({
  xs: 12,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 12,
})``;

const LabelCol: any = styled(Col as any).attrs({
  xs: 6,
  sm: 8,
  md: 8,
  lg: 8,
  xl: 8,
})`
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  background-color: ${(props: any) =>
    props.haschanged ? _primary : _secondary};
  font-weight: 900;
  color: #fff;
`;

const MenuCol: any = styled(Col as any).attrs({
  xs: 3,
  sm: 2,
  md: 2,
  lg: 2,
  xl: 2,
})`
  border-radius: 0px;
  height: 40px;
`;

const InfoCol: any = styled(Col as any).attrs({
  xs: 3,
  sm: 2,
  md: 2,
  lg: 2,
  xl: 2,
})`
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  border: 1px solid ${_secondary};
  background-color: ${(props: any) =>
    !props.haschanged ? _secondary : props.isValid ? _success : _error};
  font-weight: 900;
  color: #fff;
  border-left: none;
`;

const SpanChoice: any = styled.div`
  flex: 1;
  line-height: ${"40px"};
  height: 40px;
  cursor: pointer;
  text-align: center;
  border-top: 1px solid
    ${(props: any) => (props.haschanged ? _primary : _secondary)};
  border-bottom: 1px solid
    ${(props: any) => (props.haschanged ? _primary : _secondary)};
`;

@inject((allStores: any) => ({
  projectStore: allStores.projectStore,
}))
@observer
export class General extends React.Component<Props> {
  // private setTitle = (e: any) => {
  //   this.props.projectStore!.setTitle(e.currentTarget.value);
  // };
  // private setDescription = (e: any) => {
  //   this.props.projectStore!.setDescription(e.currentTarget.value);
  // };
  private setReference = (e: any) => {
    this.props.projectStore!.setReference(e.currentTarget.value);
  };

  private selectRefPrefix = (e: any) => {
    this.props.projectStore!.setRefPrefix(e.key);
  };

  public render() {
    const isValid = this.props.projectStore!.isReferenceValid;
    const menu = (
      <Menu selectable={true} onSelect={this.selectRefPrefix}>
        <Menu.Item key="R31">R31</Menu.Item>
        <Menu.Item key="R32">R32</Menu.Item>
      </Menu>
    );
    return (
      <MyContainer>
        <Title>Informations générales</Title>
        <ColLayout>
          {/* <MyRow>
            <LabelCol
              haschanged={this.props.projectStore!.title !== "" ? 1 : 0}
            >
              Titre du projet
            </LabelCol>
            <InputCol>
              <MyInput
                haschanged={this.props.projectStore!.title !== "" ? 1 : 0}
                value={this.props.projectStore!.title}
                onChange={this.setTitle}
                placeholder="Entrer le titre du projet"
                size="large"
                style={{ width: "100%" }}
              />
            </InputCol>
          </MyRow> */}

          <MyRow>
            <LabelCol
              haschanged={this.props.projectStore!.reference !== "" ? 1 : 0}
            >
              Ref Grdf
            </LabelCol>
            <MenuCol
              haschanged={this.props.projectStore!.reference !== "" ? 1 : 0}
            >
              <Dropdown overlay={menu} placement="bottomLeft">
                <SpanChoice>{this.props.projectStore!.refPrefix}</SpanChoice>
              </Dropdown>
            </MenuCol>
            <InputCol>
              <MyInput
                haschanged={this.props.projectStore!.reference !== "" ? 1 : 0}
                value={this.props.projectStore!.reference}
                onChange={this.setReference}
                placeholder=""
                size="large"
                style={{ width: "100%" }}
              />
            </InputCol>
            <InfoCol
              haschanged={this.props.projectStore!.reference !== "" ? 1 : 0}
              isValid={isValid}
            >
              {isValid ? (
                <FontAwesomeIcon
                  icon="check"
                  style={{ fontSize: "1.5em", color: "#FFF" }}
                />
              ) : (
                <FontAwesomeIcon
                  icon="exclamation"
                  style={{ fontSize: "1.5em", color: "#FFF" }}
                />
              )}
            </InfoCol>
          </MyRow>
          <MyRow>
            {!isValid && this.props.projectStore!.reference !== "" && (
              <ErrorMessage>
                Veuillez rentrer un nombre à 7 chiffres
              </ErrorMessage>
            )}
          </MyRow>
          <ButtonWrapper isValid={isValid}>
            <NextButton disabled={!isValid} size={"large"} />
          </ButtonWrapper>
          {/* <MyRow>
            <LabelCol
              haschanged={this.props.projectStore!.description !== "" ? 1 : 0}
            >
              Description
            </LabelCol>
            <InputCol>
              <MyTextArea
                value={this.props.projectStore!.description}
                rows={4}
                onChange={this.setDescription}
                style={{ width: "100%" }}
              />
            </InputCol>
          </MyRow> */}
        </ColLayout>
      </MyContainer>
    );
  }
}

export default General;

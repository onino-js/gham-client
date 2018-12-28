import * as React from "react";
import TextArea from "antd/lib/input/TextArea";
import { Form, Input, Col } from "antd";
import { observer, inject } from "mobx-react";
import styled from "../styled-components";
import { MyRow } from "./shared/Styled";
import { ProjectStore } from "../stores/project.store";
import { UiStore } from "../stores/ui.store";

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
  color: #ccc;
`;

const MyInput: any = styled(Input as any)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-color: ${(props: any) => (props.haschanged ? "#1890ff" : "#CCC")};
`;

const MyTextArea: any = styled(TextArea as any)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-color: ${(props: any) => (props.haschanged ? "#1890ff" : "#CCC")};
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
  xs: 16,
  sm: 16,
  md: 16,
  lg: 16,
  xl: 16,
})``;

const LabelCol: any = styled(Col as any).attrs({
  xs: 8,
  sm: 8,
  md: 8,
  lg: 8,
  xl: 8,
})`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  background-color: ${(props: any) => (props.haschanged ? "#1890ff" : "#CCC")};
  font-weight: 900;
  color: #fff;
`;

@inject((allStores: any) => ({
  projectStore: allStores.projectStore,
}))
@observer
export class General extends React.Component<Props> {
  private setTitle = (e: any) => {
    this.props.projectStore!.setTitle(e.currentTarget.value);
  };
  private setDescription = (e: any) => {
    this.props.projectStore!.setDescription(e.currentTarget.value);
  };
  private setReference = (e: any) => {
    this.props.projectStore!.setReference(e.currentTarget.value);
  };

  public render() {
    return (
      <MyContainer>
        <Title>Informations générales</Title>
        <ColLayout>
          <MyRow>
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
          </MyRow>

          <MyRow>
            <LabelCol
              haschanged={this.props.projectStore!.reference !== "" ? 1 : 0}
            >
              Ref Grdf
            </LabelCol>
            <InputCol>
              <MyInput
                haschanged={this.props.projectStore!.reference !== "" ? 1 : 0}
                value={this.props.projectStore!.reference}
                onChange={this.setReference}
                placeholder="Entrer le titre du projet"
                size="large"
                style={{ width: "100%" }}
              />
            </InputCol>
          </MyRow>
          <MyRow>
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
          </MyRow>
        </ColLayout>
      </MyContainer>
    );
  }
}

export default General;

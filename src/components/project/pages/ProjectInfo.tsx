import * as React from "react";
import { observer, inject } from "mobx-react";
import { PrimaryTitle } from "./../../shared/Styled";
import { UiStore } from "../../../stores/ui/index";
import { Flex } from "../../layout/Flex";
import { Input, Row, Col } from "antd";
import { IprojectJSON } from "../../../models/project.model";
import { ProjectStore } from "../../../stores/projects";
import { AllStores } from "../../../models/all.stores.model";
import styled from "../../../styled-components";
import { _error, _primary_bg, _secondary_bg } from "../../../css/_colors";
import eiffageImg from "./../../../image/eiffage.png";
import grdfImg from "./../../../image/grdf.jpg";

interface Props {
  uiStore?: UiStore;
  editedProject?: IprojectJSON;
  projectStore?: ProjectStore;
}

const ErrorMessage: any = styled.div`
  font-size: 0.9em;
  color: ${(props: any) => (props.show ? _error : _primary_bg)};
  width: 100%;
  text-align: center;
  margin-top: 30px;
`;

const MyRow = styled(Row as any)`
  width: 100%;
  max-width: 400px;
  height: auto;
  margin: 10px 0 10px 0;
`;

const RefInput = styled(Input as any)`
  letter-spacing: 10px;
  text-align: center;
  font-size: 1.5em;
  font-weight: 600;
`;

const Img = styled.img`
  height: 80px;
  width: auto;
  border: 1px solid ${_secondary_bg};
`;

@inject((allStores: AllStores) => ({
  editedProject: allStores.projectStore.editedProject,
  projectStore: allStores.projectStore,
  uiStore: allStores.uiStore,
}))
@observer
export class ProjectInfo extends React.Component<Props> {
  componentWillMount() {
    this.props.uiStore!.setActivePage("project-general");
  }
  public render() {
    return this.props.projectStore!.editedProject ? (
      <Flex dir="c" alignH="center">
        <PrimaryTitle>Informations générales</PrimaryTitle>
        <MyRow>
          <Col>Référence Grdf</Col>
          <Col>
            <RefInput
              value={this.props.editedProject!.reference}
              disabled={true}
            />
          </Col>
        </MyRow>
        <MyRow>
          <Col>Entete gauche</Col>
          <Col>
            <Img src={eiffageImg} />
          </Col>
        </MyRow>
        <MyRow>
          <Col>Entete droite</Col>
          <Col>
            <Img src={grdfImg} />
          </Col>
        </MyRow>
      </Flex>
    ) : (
      <Flex>
        <p>Aucun projet sélectionné </p>
      </Flex>
    );
  }
}

export default ProjectInfo;

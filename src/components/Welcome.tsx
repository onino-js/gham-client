import * as React from "react";
import Report from "./report/Report";
import { Button } from "antd";
import styled from "styled-components";
import { _primary_font, _primary } from "../css/_colors";
import { _fullScreen, _center } from "../css/styled-css";
import bg from "./../image/bg.png";
import { Link } from "react-router-dom";

interface Props {}

const Container = styled.div`
  ${_fullScreen};
  ${_center};
  flex-direction: column;
  background-image: url(${bg});
`;

const Title = styled.h1`
  max-width: 500px;
  padding-bottom: 100px;
  text-align: center;
  font-weight: bolder;
  color: #fff;
`;

const P = styled.p`
  max-width: 700px;
  color: #fff;
  text-align: center;
  padding-bottom: 100px;
  line-height: 2em;
  font-size: 1.2em;
  font-weight: bolder;
`;

const Start = styled.div`
  width: 200px;
  height: 70px;
  border: none;
  border-radius: 0px;
  background-color: ${_primary};
  text-align: center;
  line-height: 70px;
  cursor: pointer;
`;

class Welcome extends React.Component<Props> {
  public render() {
    return (
      <Container>
        <Title>Bienvenue dans votre outil de génération de rapport</Title>
        <P>
          Cet outil permet de générer de manière rapide et ergonomique des
          fiches clients dans le cadre d'une demande de raccordement au gaz de
          ville. Les rapports générés répondent aux spécifications de Grdf pour
          la région ile de France, excepté Paris intra-muros.
        </P>
        <Link to="/dashboard/">
          <Start>Créer un nouveau rapport</Start>
        </Link>
      </Container>
    );
  }
}

export default Welcome;

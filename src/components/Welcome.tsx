import * as React from "react";
import styled from "styled-components";
import { _primary_bg } from "../css/_colors";
import { _fullScreen, _center } from "../css/styled-css";
// import bg from "./../image/bg2.webp";
import { Link } from "react-router-dom";
import Image from "react-image-webp";

interface Props {}

const Container = styled.div`
  ${_fullScreen};
  ${_center};
  flex-direction: column;
  position: relative;
`;

const Title = styled.h1`
  max-width: 500px;
  padding-bottom: 100px;
  text-align: center;
  font-weight: bolder;
  color: #fff;
  position: relative;
`;

const P = styled.p`
  max-width: 700px;
  color: #fff;
  text-align: center;
  padding-bottom: 100px;
  line-height: 2em;
  font-size: 1.2em;
  font-weight: bolder;
  position: relative;
`;

const Start = styled.div`
  width: 200px;
  height: 70px;
  border: none;
  border-radius: 0px;
  background-color: ${_primary_bg};
  text-align: center;
  line-height: 70px;
  cursor: pointer;
  position: relative;
`;

const BgImg = styled(Image)`
  position: absolute;
  top: 0;
  z-index: 0;
`;

class Welcome extends React.Component<Props> {
  public render() {
    return (
      <Container>
        <BgImg
          src={require("./../image/bg2.webp")}
          webp={require("./../image/bg2.webp")}
        />
        <Title>Bienvenue dans votre outil de génération de rapport</Title>
        <P>
          Cet outil permet de générer de manière rapide et ergonomique des
          fiches clients dans le cadre d'une demande de raccordement au gaz de
          ville. Les rapports générés répondent aux spécifications de Grdf pour
          la région ile de France, excepté Paris intra-muros.
        </P>
        <Link to="/dashboard/report-list">
          <Start>Créer un nouveau rapport</Start>
        </Link>
      </Container>
    );
  }
}

export default Welcome;

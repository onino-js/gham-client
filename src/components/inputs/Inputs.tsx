import * as React from "react";
import MainContact from "./MainContact";
import { SecondaryContact } from "./SecondaryContact";
import { PlugSystem } from "./PlugSystem";
import { Container } from "../shared/Styled";
import { Col } from "antd";
import styled from "../../styled-components";
import { Compteur } from "./Compteur";
import { Arrival } from "./Arrival";
import { Penetration } from "./Penetration";
import { Detente } from "./Detente";
import { Observations } from "./Observations";
import { CoffretActual } from "./CoffretActual";
import { CoffretProjected } from "./CoffretProjected";

interface Props {}

const ColLayout: any = styled(Col as any).attrs({
  xs: 24,
  sm: 20,
  md: 20,
  lg: 20,
  xl: 10,
})`
  margin: 0 auto 0 auto;
  padding-bottom: 50px;
`;

export class Inputs extends React.Component<Props> {
  public render() {
    return (
      <Container>
        <ColLayout>
          <MainContact />
        </ColLayout>
        <ColLayout>
          <SecondaryContact />
        </ColLayout>
        <ColLayout>
          <CoffretActual />
        </ColLayout>
        <ColLayout>
          <CoffretProjected />
        </ColLayout>
        <ColLayout>
          <PlugSystem />
        </ColLayout>
        <ColLayout>
          <Compteur />
        </ColLayout>
        <ColLayout>
          <Arrival />
        </ColLayout>
        <ColLayout>
          <Penetration />
        </ColLayout>
        <ColLayout>
          <Detente />
        </ColLayout>
        <ColLayout>
          <Observations />
        </ColLayout>
      </Container>
    );
  }
}

export default Inputs;

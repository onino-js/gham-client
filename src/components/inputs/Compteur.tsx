import * as React from "react";
import { Divider } from "antd";
import { ToggleButton } from "../shared/ToggleButton";
import { MyRow, InputTitle, StepWrapper } from "../shared/Styled";
import { StringInput } from "../shared/StringInput";
import { NumberInput } from "../shared/NumberInput";

interface Props {}

export class Compteur extends React.Component<Props> {
  public render() {
    return (
      <StepWrapper>
        <Divider>
          <InputTitle>Compteur</InputTitle>
        </Divider>
        <StringInput keyStore="compteurBrand" label="Marque" />
        <StringInput keyStore="compteurType" label="Type" />
        <NumberInput keyStore="compteurFlow" label="Débit" />
        <NumberInput keyStore="compteurYear" label="Année" />
        <StringInput keyStore="compteurNumber" label="Numéro" />
        <MyRow>
          <ToggleButton keyStore="compteurConserv" name="CONSERVER ?" />
        </MyRow>
      </StepWrapper>
    );
  }
}

export default Compteur;

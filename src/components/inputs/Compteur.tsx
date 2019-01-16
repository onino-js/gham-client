import * as React from "react";
import { Divider } from "antd";
import { ToggleButton } from "../shared/ToggleButton";
import { MyRow, InputTitle, StepWrapper } from "../shared/Styled";
import { StringInput } from "../shared/StringInput";
import { NumberInput } from "../shared/NumberInput";

interface Props {}

const compteurList = ["Grdf", "Thales", "Hypios"];

export class Compteur extends React.Component<Props> {
  public render() {
    return (
      <StepWrapper>
        <Divider>
          <InputTitle>Compteur</InputTitle>
        </Divider>
        <StringInput
          list={compteurList}
          keyStore="compteurBrand"
          label="Marque"
          mandatory={true}
        />
        <StringInput keyStore="compteurType" label="Type" mandatory={true} />
        <StringInput
          type="number"
          keyStore="compteurFlow"
          label="Débit"
          mandatory={true}
        />
        <StringInput
          type="number"
          keyStore="compteurYear"
          label="Année"
          mandatory={true}
        />
        <StringInput
          keyStore="compteurNumber"
          label="Numéro"
          mandatory={true}
        />
        <StringInput
          keyStore="compteurConserv"
          label="Conserver compteur"
          mandatory={true}
          list={["OUI", "NON"]}
        />
      </StepWrapper>
    );
  }
}

export default Compteur;

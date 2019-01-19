import * as React from "react";
import { Divider } from "antd";
import { InputTitle } from "../../shared/Styled";
import { StringInput } from "../../inputs/StringInput";

interface Props {}

const compteurList = ["Grdf", "Thales", "Hypios"];

export class Compteur extends React.Component<Props> {
  public render() {
    return (
      <React.Fragment>
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
        <StringInput keyStore="compteurFlow" label="Débit" mandatory={true} />
        <StringInput keyStore="compteurYear" label="Année" mandatory={true} />
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
      </React.Fragment>
    );
  }
}

export default Compteur;

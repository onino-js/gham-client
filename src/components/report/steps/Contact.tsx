import * as React from "react";
import { Divider } from "antd";
import { ReportStore } from "../../../stores/report";
import { StringInput } from "../../inputs/StringInput";
import { InputTitle } from "../../shared/Styled";

interface Props {
  uiStore?: any;
  reportStore?: ReportStore;
}

export class Contact extends React.Component<Props> {
  public render() {
    return (
      <React.Fragment>
        <Divider>
          <InputTitle>Contact principal</InputTitle>
        </Divider>
        <StringInput
          list={["Mme", "Mr"]}
          keyStore="genre"
          label="Civilité"
          mandatory={true}
        />
        <StringInput
          type="text"
          mandatory={true}
          keyStore="lastName"
          label="Nom de famille"
        />
        <StringInput
          type="text"
          mandatory={true}
          keyStore="firstName"
          label="Prénom(s)"
        />
        <StringInput
          type="text"
          mandatory={true}
          keyStore="city"
          label="Ville"
        />
        <StringInput
          type="text"
          mandatory={true}
          keyStore="addressZip"
          label="Code postal"
        />
        <StringInput
          type="text"
          mandatory={true}
          keyStore="addressNumber"
          label="Numéro de rue"
        />
        <StringInput
          type="text"
          mandatory={true}
          keyStore="address"
          label="Adresse"
        />
        <StringInput type="text" keyStore="phone" label="phone" />
        <StringInput
          list={["PROPRIETAIRE", "LOCATAIRE"]}
          keyStore="occupation"
          label="Occupation"
          mandatory={true}
        />
        <Divider>
          <InputTitle>Copropriétaire</InputTitle>
        </Divider>
        <StringInput list={["Mme", "Mr"]} keyStore="_genre" label="Civilité" />
        <StringInput
          type="text"
          keyStore="co_lastName"
          label="Nom de famille"
        />
        <StringInput type="text" keyStore="co_firstName" label="Prénom(s)" />
        <StringInput type="text" keyStore="co_city" label="Ville" />
        <StringInput type="text" keyStore="co_addressZip" label="Code postal" />
        <StringInput
          type="text"
          keyStore="co_addressNumber"
          label="Numéro de rue"
        />
        <StringInput type="text" keyStore="co_address" label="Adresse" />
        <StringInput type="text" keyStore="co_phone" label="phone" />
      </React.Fragment>
    );
  }
}

export default Contact;

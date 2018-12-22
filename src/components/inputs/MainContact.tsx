import * as React from "react";
import { Col, Divider } from "antd";
import { ContactStore } from "../../stores/contact.store";
import { StringInput } from "../shared/StringInput";
import { ToggleButton } from "../shared/ToggleButton";
import { MyRow, InputCol, InputTitle } from "../shared/Styled";

interface Props {
  uiStore?: any;
  contactStore?: ContactStore;
}

export class MainContact extends React.Component<Props> {
  public render() {
    return (
      <React.Fragment>
        <Divider>
          <InputTitle>Contact principal</InputTitle>
        </Divider>
        <MyRow>
          <ToggleButton name="Mme" keyStore="title" />
          <ToggleButton name="Mr" keyStore="title" invert={true} />
        </MyRow>
        <StringInput keyStore="lastName" label="Nom de famille" />
        <StringInput keyStore="firstName" label="Prénom(s)" />
        <StringInput keyStore="city" label="Ville" />
        <StringInput keyStore="address" label="Adresse" />
        <StringInput keyStore="phone" label="phone" />
        <MyRow>
          <ToggleButton name="PROPRIETAIRE" keyStore="isOwner" />
          <ToggleButton name="LOCATAIRE" keyStore="isOwner" invert={true} />
        </MyRow>
      </React.Fragment>
    );
  }
}

export default MainContact;

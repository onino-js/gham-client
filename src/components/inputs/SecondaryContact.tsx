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

export class SecondaryContact extends React.Component<Props> {
  public render() {
    return (
      <React.Fragment>
        <Divider>
          <InputTitle>Copropriétaire</InputTitle>
        </Divider>
        <MyRow>
          <ToggleButton name="Mme" keyStore="co_title" />
          <ToggleButton name="Mr" keyStore="co_title" invert={true} />
        </MyRow>
        <StringInput keyStore="co_lastName" label="Nom de famille" />
        <StringInput keyStore="co_firstName" label="Prénom(s)" />
        <StringInput keyStore="co_city" label="Ville" />
        <StringInput keyStore="co_address" label="Adresse" />
        <StringInput keyStore="co_phone" label="phone" />
      </React.Fragment>
    );
  }
}

export default SecondaryContact;

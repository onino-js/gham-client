import * as React from "react";
import { Divider } from "antd";
import { ContactStore } from "../../stores/contact.store";
import { StringInput } from "../shared/StringInput";
import { MyRow, InputTitle } from "../shared/Styled";
import { MultipleChoiceButton } from "../shared/MultipleChoiceButton";

interface Props {
  uiStore?: any;
  contactStore?: ContactStore;
}

const choiceItems = [
  {
    title: "Mme",
    keyStore: "co_isWoman" as keyof (ContactStore),
  },
  {
    title: "M.",
    keyStore: "co_isMan" as keyof (ContactStore),
  },
];

export class SecondaryContact extends React.Component<Props> {
  public render() {
    return (
      <React.Fragment>
        <Divider>
          <InputTitle>Copropriétaire</InputTitle>
        </Divider>
        <MyRow>
          <MultipleChoiceButton choiceItems={choiceItems} />
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

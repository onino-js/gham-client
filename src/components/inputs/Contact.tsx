import * as React from "react";
import { Divider } from "antd";
import { ContactStore } from "../../stores/contact.store";
import { StringInput } from "../shared/StringInput";
import { MyRow, InputTitle, StepWrapper } from "../shared/Styled";
import { MultipleChoiceButton } from "../shared/MultipleChoiceButton";
import { StringListInput } from "../shared/StringListInput";

interface Props {
  uiStore?: any;
  contactStore?: ContactStore;
}

const choiceItems = [
  {
    title: "Mme",
    keyStore: "isWoman" as keyof (ContactStore),
  },
  {
    title: "M.",
    keyStore: "isMan" as keyof (ContactStore),
  },
];
const choiceItems2 = [
  {
    title: "PROPRIETAIRE",
    keyStore: "isOwner" as keyof (ContactStore),
  },
  {
    title: "LOCATAIRE",
    keyStore: "isRenter" as keyof (ContactStore),
  },
];

const choiceItems3 = [
  {
    title: "Mme",
    keyStore: "co_isWoman" as keyof (ContactStore),
  },
  {
    title: "M.",
    keyStore: "co_isMan" as keyof (ContactStore),
  },
];

export class Contact extends React.Component<Props> {
  public render() {
    return (
      <StepWrapper>
        <Divider>
          <InputTitle>Contact principal</InputTitle>
        </Divider>
        <MyRow>
          <MultipleChoiceButton choiceItems={choiceItems} />
        </MyRow>
        <StringListInput keyStore="lastName" label="Nom de famille" />
        <StringInput keyStore="firstName" label="Prénom(s)" />
        <StringInput keyStore="city" label="Ville" />
        <StringInput keyStore="address" label="Adresse" />
        <StringInput keyStore="phone" label="phone" />
        <MyRow>
          <MultipleChoiceButton choiceItems={choiceItems2} />
        </MyRow>
        <Divider>
          <InputTitle>Copropriétaire</InputTitle>
        </Divider>
        <MyRow>
          <MultipleChoiceButton choiceItems={choiceItems3} />
        </MyRow>
        <StringInput keyStore="co_lastName" label="Nom de famille" />
        <StringInput keyStore="co_firstName" label="Prénom(s)" />
        <StringInput keyStore="co_city" label="Ville" />
        <StringInput keyStore="co_address" label="Adresse" />
        <StringInput keyStore="co_phone" label="phone" />
      </StepWrapper>
    );
  }
}

export default Contact;

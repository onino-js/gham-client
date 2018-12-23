import * as React from "react";
import { Col, Divider } from "antd";
import { ContactStore } from "../../stores/contact.store";
import { StringInput } from "../shared/StringInput";
import { ToggleButton } from "../shared/ToggleButton";
import { MyRow, InputCol, InputTitle } from "../shared/Styled";
import { MultipleChoiceButton } from "../shared/MultipleChoiceButton";

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

export class MainContact extends React.Component<Props> {
  public render() {
    return (
      <React.Fragment>
        <Divider>
          <InputTitle>Contact principal</InputTitle>
        </Divider>
        <MyRow>
          <MultipleChoiceButton choiceItems={choiceItems} />
        </MyRow>
        <StringInput keyStore="lastName" label="Nom de famille" />
        <StringInput keyStore="firstName" label="Prénom(s)" />
        <StringInput keyStore="city" label="Ville" />
        <StringInput keyStore="address" label="Adresse" />
        <StringInput keyStore="phone" label="phone" />
        <MyRow>
          <MultipleChoiceButton choiceItems={choiceItems2} />
        </MyRow>
      </React.Fragment>
    );
  }
}

export default MainContact;

import * as React from "react";
import { Divider } from "antd";
import { MyRow, InputTitle, StepWrapper } from "../shared/Styled";
import { StringInput } from "../shared/StringInput";
import { NumberInput } from "../shared/NumberInput";
import {
  MultipleChoiceButton,
  IchoiceItem,
} from "../shared/MultipleChoiceButton";
import { observer, inject } from "mobx-react";
import { AllStores } from "../../models/all.stores.model";
import { ContactStore } from "../../stores/contact.store";
import { ToggleButton } from "../shared/ToggleButton";

interface Props {
  contactStore?: ContactStore;
}

const choiceItems: IchoiceItem[] = [
  {
    title: "INDIVIDUEL",
    keyStore: "individualPlug",
  },
  {
    title: "COLLECTIF",
    keyStore: "collectivePlug",
  },
  {
    title: "IMPRODUCTIF",
    keyStore: "improductivePlug",
  },
];

const choiceItems2: IchoiceItem[] = [
  {
    title: "EXISTANTE",
    keyStore: "detenteExists",
  },
  {
    title: "A POSER",
    keyStore: "detentePose",
  },
];

@inject((allStores: AllStores) => ({
  contactStore: allStores.contactStore,
}))
@observer
export class Linking extends React.Component<Props> {
  public render() {
    return (
      <StepWrapper>
        <Divider>
          <InputTitle>Branchements</InputTitle>
        </Divider>
        <MyRow>
          <MultipleChoiceButton choiceItems={choiceItems} />
        </MyRow>
        <MyRow>
          <NumberInput keyStore="nbOfYears" label="Nombre d'annèes" />
        </MyRow>
        <Divider>
          <InputTitle>Arrivée</InputTitle>
        </Divider>
        <StringInput keyStore="arrivalNature" label="Nature" />
        <NumberInput keyStore="arrivalDiameter" label="Diamètre" />
        <Divider>
          <InputTitle>Pénétration</InputTitle>
        </Divider>
        <StringInput keyStore="penetrationNature" label="Nature" />
        <NumberInput keyStore="penetrationDiameter" label="Diamètre" />
        <MyRow>
          <ToggleButton keyStore="penetrationConserved" name="CONSERVER" />
        </MyRow>
        {!this.props.contactStore!.penetrationConserved && (
          <React.Fragment>
            <StringInput keyStore="_penetrationNature" label="Nature" />
            <NumberInput keyStore="_penetrationDiameter" label="Diamètre" />
            <NumberInput keyStore="_penetrationLength" label="Diamètre" />
          </React.Fragment>
        )}
        <Divider>
          <InputTitle>Détente</InputTitle>
        </Divider>
        <StringInput keyStore="detenteType" label="Type" />
        <MyRow>
          <MultipleChoiceButton choiceItems={choiceItems2} />
        </MyRow>
      </StepWrapper>
    );
  }
}

export default Linking;

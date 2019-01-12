import * as React from "react";
import { Divider } from "antd";
import { ToggleButton } from "../shared/ToggleButton";
import { MyRow, InputTitle, StepWrapper } from "../shared/Styled";
import { StringInput } from "../shared/StringInput";
import {
  MultipleChoiceButton,
  IchoiceItem,
} from "../shared/MultipleChoiceButton";
import { inject, observer } from "mobx-react";
import { AllStores } from "../../models/all.stores.model";
import { ContactStore } from "../../stores/contact.store";

interface Props {
  contactStore?: ContactStore;
}

const choiceItems: IchoiceItem[] = [
  {
    title: "S/CARTER",
    keyStore: "sCarter",
  },
  {
    title: "ROB. FAC.",
    keyStore: "robFac",
  },
  {
    title: "COFFRET",
    keyStore: "isCoffret",
  },
];

const choiceItems2: IchoiceItem[] = [
  {
    title: "ENCASTRE",
    keyStore: "isEncastred",
  },
  {
    title: "ENTERRE",
    keyStore: "isBurried",
  },
  {
    title: "GRILLAGE",
    keyStore: "hasMesh",
  },
  {
    title: "HORS LIMITE",
    keyStore: "isOutOfBound",
  },
  {
    title: "SUR SOCLE",
    keyStore: "hasBase",
  },
  {
    title: "EN SAILLIE",
    keyStore: "projection",
  },
];

const choiceItems3: IchoiceItem[] = [
  {
    title: "SUPPR?",
    keyStore: "_suppr",
  },
  {
    title: "REEQUIP?",
    keyStore: "_reequip",
  },
  {
    title: "POSE?",
    keyStore: "_pose",
  },
];

const choiceItems4: IchoiceItem[] = [
  {
    title: "ENCASTRE",
    keyStore: "_isEncastred",
  },
  {
    title: "ENTERRE",
    keyStore: "_isBurried",
  },
  {
    title: "GRILLAGE",
    keyStore: "_hasMesh",
  },
  {
    title: "HORS LIMITE",
    keyStore: "_isOutOfBound",
  },
  {
    title: "SUR SOCLE",
    keyStore: "_hasBase",
  },
  {
    title: "EN SAILLIE",
    keyStore: "_projection",
  },
];

@inject((allStores: AllStores) => ({
  contactStore: allStores.contactStore,
}))
@observer
export class Coffret extends React.Component<Props> {
  public render() {
    return (
      <StepWrapper>
        <Divider>
          <InputTitle>Coffret actuel</InputTitle>
        </Divider>
        <MyRow>
          <MultipleChoiceButton choiceItems={choiceItems} />
        </MyRow>
        {this.props.contactStore!.isCoffret && (
          <React.Fragment>
            <StringInput keyStore="coffretType" label="type" />
            <MyRow>
              <MultipleChoiceButton choiceItems={choiceItems2} />
            </MyRow>
          </React.Fragment>
        )}
        <MyRow>
          <ToggleButton keyStore="poseBp" name="POSE DETENTE BP" />
        </MyRow>
        <Divider>
          <InputTitle>Coffret projet</InputTitle>
        </Divider>
        <MyRow>
          <MultipleChoiceButton choiceItems={choiceItems3} />
        </MyRow>
        {this.props.contactStore!._pose && (
          <React.Fragment>
            <StringInput keyStore="_coffretType" label="type" />
            <MyRow>
              <MultipleChoiceButton choiceItems={choiceItems4} />
            </MyRow>
          </React.Fragment>
        )}
        <MyRow>
          <ToggleButton keyStore="_poseBp" name="POSE DETENTE BP" />
        </MyRow>
      </StepWrapper>
    );
  }
}

export default Coffret;

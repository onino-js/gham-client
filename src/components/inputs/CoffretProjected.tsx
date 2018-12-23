import * as React from "react";
import { Divider } from "antd";
import { ToggleButton } from "../shared/ToggleButton";
import { MyRow, InputTitle } from "../shared/Styled";
import { StringInput } from "../shared/StringInput";
import { ContactStore } from "../../stores/contact.store";
import {
  MultipleChoiceButton,
  IchoiceItem,
} from "../shared/MultipleChoiceButton";
import { inject, observer } from "mobx-react";
import { AllStores } from "../../models/all.stores.model";

interface Props {
  contactStore?: ContactStore;
}

const choiceItems: IchoiceItem[] = [
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

const choiceItems2: IchoiceItem[] = [
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
export class CoffretProjected extends React.Component<Props> {
  public render() {
    return (
      <React.Fragment>
        <Divider>
          <InputTitle>Coffret projet</InputTitle>
        </Divider>
        <MyRow>
          <MultipleChoiceButton choiceItems={choiceItems} />
        </MyRow>
        {this.props.contactStore!._pose && (
          <React.Fragment>
            <StringInput keyStore="_coffretType" label="type" />
            <MyRow>
              <MultipleChoiceButton choiceItems={choiceItems2} />
            </MyRow>
            <MyRow>
              <ToggleButton keyStore="_poseBp" name="POSE DETENTE BP" />
            </MyRow>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default CoffretProjected;

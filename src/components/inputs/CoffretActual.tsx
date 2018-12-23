import * as React from "react";
import { Divider } from "antd";
import { ToggleButton } from "../shared/ToggleButton";
import { MyRow, InputTitle } from "../shared/Styled";
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

@inject((allStores: AllStores) => ({
  contactStore: allStores.contactStore,
}))
@observer
export class CoffretActual extends React.Component<Props> {
  public render() {
    return (
      <React.Fragment>
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
            <MyRow>
              <ToggleButton keyStore="poseBp" name="POSE DETENTE BP" />
            </MyRow>{" "}
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default CoffretActual;

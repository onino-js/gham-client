import * as React from "react";
import { Divider } from "antd";
import { MyRow, InputTitle } from "../shared/Styled";
import { NumberInput } from "../shared/NumberInput";
import {
  MultipleChoiceButton,
  IchoiceItem,
} from "../shared/MultipleChoiceButton";

interface Props {}

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

export class PlugSystem extends React.Component<Props> {
  public render() {
    return (
      <React.Fragment>
        <Divider>
          <InputTitle>Branchements</InputTitle>
        </Divider>
        <MyRow>
          <MultipleChoiceButton choiceItems={choiceItems} />
        </MyRow>
        <MyRow>
          <NumberInput keyStore="nbOfYears" label="Nombre d'annèes" />
        </MyRow>
      </React.Fragment>
    );
  }
}

export default PlugSystem;

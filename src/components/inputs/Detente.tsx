import * as React from "react";
import { Divider } from "antd";
import { MyRow, InputTitle } from "../shared/Styled";
import { StringInput } from "../shared/StringInput";
import {
  MultipleChoiceButton,
  IchoiceItem,
} from "../shared/MultipleChoiceButton";

interface Props {}

const choiceItems: IchoiceItem[] = [
  {
    title: "EXISTANTE",
    keyStore: "detenteExists",
  },
  {
    title: "A POSER",
    keyStore: "detentePose",
  },
];

export class Detente extends React.Component<Props> {
  public render() {
    return (
      <React.Fragment>
        <Divider>
          <InputTitle>Détente</InputTitle>
        </Divider>
        <StringInput keyStore="detenteType" label="Type" />
        <MyRow>
          <MultipleChoiceButton choiceItems={choiceItems} />
        </MyRow>
      </React.Fragment>
    );
  }
}

export default Detente;

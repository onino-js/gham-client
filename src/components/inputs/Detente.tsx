import * as React from "react";
import { Divider } from "antd";
import { ToggleButton } from "../shared/ToggleButton";
import { MyRow, InputTitle } from "../shared/Styled";
import { StringInput } from "../shared/StringInput";
import { NumberInput } from "../shared/NumberInput";

interface Props {}

export class Detente extends React.Component<Props> {
  public render() {
    return (
      <React.Fragment>
        <Divider>
          <InputTitle>Détente</InputTitle>
        </Divider>
        <StringInput keyStore="detenteType" label="Type" />
        <MyRow>
          <ToggleButton keyStore="detenteExists" name="EXISTANTE" />
          <ToggleButton keyStore="detentePose" name="A POSER" />
        </MyRow>
      </React.Fragment>
    );
  }
}

export default Detente;

import * as React from "react";
import { Divider } from "antd";
import { InputTitle } from "../shared/Styled";
import { StringInput } from "../shared/StringInput";
import { NumberInput } from "../shared/NumberInput";

interface Props {}

export class Arrival extends React.Component<Props> {
  public render() {
    return (
      <React.Fragment>
        <Divider>
          <InputTitle>Arrivée</InputTitle>
        </Divider>
        <StringInput keyStore="arrivalNature" label="Nature" />
        <NumberInput keyStore="arrivalDiameter" label="Diamètre" />
      </React.Fragment>
    );
  }
}

export default Arrival;

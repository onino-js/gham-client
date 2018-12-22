import * as React from "react";
import { Divider } from "antd";
import { ToggleButton } from "../shared/ToggleButton";
import { MyRow, InputTitle } from "../shared/Styled";
import { StringInput } from "../shared/StringInput";
import { NumberInput } from "../shared/NumberInput";

interface Props {}

export class Observations extends React.Component<Props> {
  public render() {
    return (
      <React.Fragment>
        <Divider>
          <InputTitle>Observations</InputTitle>
        </Divider>
        <StringInput keyStore="obsTerass" label="Terass. int" />
        <StringInput keyStore="obsSaignee" label="Saignées" />
        <StringInput keyStore="obsPerc" label="Perçages" />
        <StringInput keyStore="obsRemarks" label="Remarques" />
      </React.Fragment>
    );
  }
}

export default Observations;

import * as React from "react";
import { Divider } from "antd";
import { InputTitle, StepWrapper } from "../shared/Styled";
import { StringInput } from "../shared/StringInput";

interface Props {}

export class Observations extends React.Component<Props> {
  public render() {
    return (
      <StepWrapper>
        <Divider>
          <InputTitle>Observations</InputTitle>
        </Divider>
        <StringInput keyStore="obsTerass" label="Terass. int" />
        <StringInput keyStore="obsSaignee" label="Saignées" />
        <StringInput keyStore="obsPerc" label="Perçages" />
        <StringInput keyStore="obsRemarks" label="Remarques" />
      </StepWrapper>
    );
  }
}

export default Observations;

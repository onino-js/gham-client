import * as React from "react";
import { Col, Divider } from "antd";
import { ToggleButton } from "../shared/ToggleButton";
import { MyRow, InputTitle } from "../shared/Styled";
import { NumberInput } from "../shared/NumberInput";

interface Props {}

export class PlugSystem extends React.Component<Props> {
  public render() {
    return (
      <React.Fragment>
        <Divider>
          <InputTitle>Branchements</InputTitle>
        </Divider>
        <MyRow>
          <ToggleButton keyStore="isIndividualPlug" name="INDIVIDUEL" />
          <ToggleButton
            keyStore="isIndividualPlug"
            name="COLLECTIF"
            invert={true}
          />
          <ToggleButton keyStore="improductivePlug" name="IMPRODUCTIF" />
        </MyRow>
        <MyRow>
          <NumberInput keyStore="nbOfYears" label="Nombre d'annèes" />
        </MyRow>
      </React.Fragment>
    );
  }
}

export default PlugSystem;

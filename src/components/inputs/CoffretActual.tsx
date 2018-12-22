import * as React from "react";
import { Divider } from "antd";
import { ToggleButton } from "../shared/ToggleButton";
import { MyRow, InputTitle } from "../shared/Styled";
import { StringInput } from "../shared/StringInput";

interface Props {}

export class CoffretActual extends React.Component<Props> {
  public render() {
    return (
      <React.Fragment>
        <Divider>
          <InputTitle>Coffret actuel</InputTitle>
        </Divider>
        <MyRow>
          <ToggleButton keyStore="sCarter" name="S/CARTER" />
          <ToggleButton keyStore="robFac" name="ROB. FAC." />
          <ToggleButton keyStore="isCoffret" name="COFFRET" />
        </MyRow>
        <StringInput keyStore="coffretType" label="type" />
        <MyRow>
          <ToggleButton keyStore="isEncastred" name="ENCASTRE" />
          <ToggleButton keyStore="isBurried" name="ENTERRE" />
          <ToggleButton keyStore="hasMesh" name="GRILLAGE" />
        </MyRow>
        <MyRow>
          <ToggleButton keyStore="isOutOfBound" name="HORS LIMITE" />
          <ToggleButton keyStore="hasBase" name="SUR SOCLE" />
          <ToggleButton keyStore="projection" name="EN SAILLIE" />
        </MyRow>
        <MyRow>
          <ToggleButton keyStore="poseBp" name="POSE DETENTE BP" />
        </MyRow>
      </React.Fragment>
    );
  }
}

export default CoffretActual;

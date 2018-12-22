import * as React from "react";
import { Divider } from "antd";
import { ToggleButton } from "../shared/ToggleButton";
import { MyRow, InputTitle } from "../shared/Styled";
import { StringInput } from "../shared/StringInput";

interface Props {}

export class CoffretProjected extends React.Component<Props> {
  public render() {
    return (
      <React.Fragment>
        <Divider>
          <InputTitle>Coffret projet</InputTitle>
        </Divider>
        <MyRow>
          <ToggleButton keyStore="_suppr" name="SUPPR ?" />
          <ToggleButton keyStore="_reequip" name="REEQUIP ?" />
          <ToggleButton keyStore="_pose" name="POSE" />
        </MyRow>
        <StringInput keyStore="_coffretType" label="type" />
        <MyRow>
          <ToggleButton keyStore="_isEncastred" name="ENCASTRE" />
          <ToggleButton keyStore="_isBurried" name="ENTERRE" />
          <ToggleButton keyStore="_hasMesh" name="GRILLAGE" />
        </MyRow>
        <MyRow>
          <ToggleButton keyStore="_isOutOfBound" name="HORS LIMITE" />
          <ToggleButton keyStore="_hasBase" name="SUR SOCLE" />
          <ToggleButton keyStore="_projection" name="EN SAILLIE" />
        </MyRow>
        <MyRow>
          <ToggleButton keyStore="_poseBp" name="POSE DETENTE BP" />
        </MyRow>
      </React.Fragment>
    );
  }
}

export default CoffretProjected;

import styled from "../../styled-components";
import { Button } from "antd";
import { _center } from "../../css/styled-css";
import {
  _tertiary_bg,
  _primary_bg,
  _secondary_bg,
  _primary,
  _primary_font,
} from "../../css/_colors";

interface IsquareButton {
  s: string;
}

interface IactionButton extends IsquareButton {
  enabled: boolean;
}

export const SmallButton = styled(Button as any)`
  width: 32px;
  height: 32px;
  ${_center}
`;

export const SquareButton = styled(Button as any)`
  height: ${(props: IsquareButton) => props.s}px;
  width: ${(props: IsquareButton) => props.s}px;
  margin: 10px;
`;

export const ActionButton = SquareButton.extend`
  background-color: ${(props: IactionButton) =>
    props.enabled ? _primary_bg : _secondary_bg};
  color: ${(props: IactionButton) =>
    props.enabled ? _primary : _primary_font};
  :hover {
    background-color: ${(props: IactionButton) =>
      props.enabled ? _primary : _secondary_bg};
    color: ${(props: IactionButton) =>
      props.enabled ? _primary_bg : _primary_font};
  }
`;

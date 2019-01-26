import styled from "../../styled-components";
import { Button } from "antd";
import { _center } from "../../css/styled-css";
import {
  _primary_bg,
  _secondary_bg,
  _primary,
  _primary_font,
} from "../../css/_colors";

interface IsquareButton {
  s?: number;
  f?: number;
}

interface IactionButton extends IsquareButton {
  disabled?: boolean;
}

export const SmallButton = styled(Button as any)`
  width: 32px;
  height: 32px;
  ${_center}
`;

export const SquareButton = styled(Button as any)`
  height: ${(props: IsquareButton) => props.s || 70}px;
  width: ${(props: IsquareButton) => props.s || 70}px;
  margin: 10px;
  font-size: ${(props: IsquareButton) => props.f || 2}em;
`;

export const ActionButton = SquareButton.extend`
  background-color: ${(props: IactionButton) =>
    props.disabled ? _secondary_bg : _primary_bg};
  color: ${(props: IactionButton) =>
    props.disabled ? _primary_font : _primary};
  :hover {
    background-color: ${(props: IactionButton) =>
      props.disabled ? _secondary_bg : _primary};
    color: ${(props: IactionButton) =>
      props.disabled ? _primary_font : _primary_bg};
  }
`;

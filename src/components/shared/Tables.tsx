import styled from "styled-components";
import { _center } from "../../css/styled-css";
import { Row } from "antd";
import {
  _secondary_bg,
  _primary_bg,
  _primary,
  _primary_font,
  _tertiary_bg,
} from "../../css/_colors";

interface ItableRow {
  hover: boolean;
  active?: boolean;
  header?: boolean;
}

export const TableRow: any = styled(Row as any).attrs({
  // xl: 16,
})`
  height: 40px;
  width: 100%;
  margin : 0 auto 0 auto;
  padding : 0 20px 0 20px;
  ${_center}
  background-color: ${(props: ItableRow) =>
    props.header ? _tertiary_bg : props.active ? _primary : _primary_bg};
  color: ${(props: ItableRow) => (props.active ? _primary_bg : _primary_font)};
  :hover {
    background-color: ${(props: ItableRow) =>
      props.header ? _tertiary_bg : props.hover ? _secondary_bg : _primary_bg};
  }
  cursor : pointer;
`;

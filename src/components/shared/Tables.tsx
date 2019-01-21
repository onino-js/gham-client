import styled from "styled-components";
import { _center } from "../../css/styled-css";
import { Row } from "antd";
import {
  _secondary_bg,
  _primary_bg,
  _primary,
  _primary_font,
} from "../../css/_colors";

interface ItableRow {
  hover: boolean;
  active?: boolean;
}

export const TableRow: any = styled(Row as any).attrs({
  // xl: 16,
})`
  height: 40px;
  width: 100%;
  margin : 0 auto 0 auto;
  ${_center}
  background-color: ${(props: ItableRow) =>
    props.active ? _primary : _primary_bg};
  color: ${(props: ItableRow) => (props.active ? _primary_bg : _primary_font)};
  :hover {
    background-color: ${(props: ItableRow) =>
      props.hover ? _secondary_bg : _primary_bg};
  }
  cursor : pointer;
`;

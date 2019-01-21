import * as React from "react";
import styled from "../../styled-components";
import { Row, Col, Layout, Button, Input } from "antd";
import {
  _secondary,
  _primary_bg,
  _primary,
  _success,
  _error,
} from "../../css/_colors";

export const MyRow = styled(Row as any)`
  margin-top: 15px;
  margin-bottom: 15px;
  width: 100%;
  height: 40px;
`;

export const MyInput: any = styled(Input as any)`
  border-radius: 0;
  border-color: ${(props: any) => (props.haschanged ? _primary : _secondary)};
`;

export const LabelCol: any = styled(Col as any).attrs({
  xs: 8,
  sm: 8,
  md: 8,
  lg: 8,
  xl: 8,
})`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  background-color: ${(props: any) =>
    props.haschanged ? _primary : _secondary};
  font-weight: 900;
  color: #fff;
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;
  cursor: ${(props: any) => (props.clickable ? "pointer" : "default")};
`;

export const InputCol: any = styled(Col as any).attrs({
  xs: 14,
  sm: 14,
  md: 14,
  lg: 14,
  xl: 14,
})``;

export const InfoCol: any = styled(Col as any).attrs({
  xs: 2,
  sm: 2,
  md: 2,
  lg: 2,
  xl: 2,
})`
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  border: 1px solid ${_secondary};
  background-color: ${(props: any) =>
    !props.haschanged ? _secondary : props.valid ? _success : _error};
  font-weight: 900;
  color: #fff;
  border-left: none;
`;

export const CanvasBox: any = styled(Col as any).attrs({
  xs: 24,
  sm: 24,
  md: 24,
  lg: 20,
  xl: 14,
})`
  flex: 1;
  border: 1px solid ${_secondary};
  border-style: dashed;
`;

export const SmallBullet: any = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 6px;
  margin-left: 20px;
  margin-right: 20px;
  background-color: ${(props: any) => (props.mandatory ? _error : _primary)};
`;

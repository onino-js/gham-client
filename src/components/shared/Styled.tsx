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

export const InputTitle: any = styled.span`
  font-size: 1.5em;
  font-weight: 700;
  color: ${_secondary};
`;

export const BigButton = styled(Button as any)`
  width: 100px;
  height: 100px;
  margin: 10px;
  font-size: 3em;
`;

export const PrimaryTitle = styled.div`
  font-size: 2em;
  font-weight: 900;
  padding-top: 10px;
  padding-bottom: 10px;
  color: ${_secondary};
`;

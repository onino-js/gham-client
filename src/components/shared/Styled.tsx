import * as React from "react";
import styled from "../../styled-components";
import { Row, Col, Layout, Button } from "antd";
import { _secondary, _primary_bg } from "../../css/_colors";

export const FullScreen = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const MyRow = styled(Row as any)`
  margin-top: 15px;
  margin-bottom: 15px;
  width: 100%;
`;

export const Flex: any = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: ${(props: any) =>
    props.alignH === "center" ? "center" : "flex-start"};
  align-items: ${(props: any) =>
    props.alignV === "center" ? "center" : "flex-start"};
  /* border: 1px solid red; */
`;

export const FlexC: any = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: ${(props: any) =>
    props.alignV === "center" ? "center" : "flex-start"};
  align-items: ${(props: any) =>
    props.alignH === "center" ? "center" : "flex-start"};
  /* border: 1px solid green; */
`;

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const Content = styled(Layout.Content)`
  height: 100%;
  padding: 20px;
  min-width: 340px;
  display: flex;
  flex: 1;
  overflow-y: auto;
  flex-direction: column;
  background-color: ${_primary_bg};
  /* border: 1px solid blue; */
`;

export const StepWrapper: any = styled(Col as any).attrs({
  xs: 22,
  sm: 20,
  md: 18,
  lg: 16,
  xl: 14,
})`
  margin: 0 auto 0 auto;
  flex: 1;
`;

export const InputCol: any = styled(Col as any).attrs({
  xs: 16,
  sm: 16,
  md: 16,
  lg: 16,
  xl: 16,
})``;

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

import styled from "../../styled-components";
import { Row, Col } from "antd";

export const FullScreen = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const MyRow = styled(Row as any)`
  margin-top: 15px;
  margin-bottom: 15px;
  width: 100%;
`;

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
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
  color: #ccc;
`;

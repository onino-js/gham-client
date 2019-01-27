import styled from "../../styled-components";
import { Col } from "antd";

export const StepWrapper: any = styled(Col as any).attrs({
  xs: 24,
  sm: 24,
  md: 24,
  lg: 20,
  xl: 14,
})`
  margin: 0 auto 0 auto;
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
`;

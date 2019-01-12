import * as React from "react";
import styled from "../../styled-components";

interface Props {}

const Container = styled.div`
  width: 16px;
  height: 16px;
  background-color: #fff;
  border-radius: 8px;
  margin-left: 10px;
  margin-right: 10px;
`;

export class Bullet extends React.Component<Props> {
  public render() {
    return <Container />;
  }
}

export default Bullet;

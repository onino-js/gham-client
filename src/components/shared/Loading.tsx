import * as React from "react";
import { Flex } from "./../layout/Flex";
import { Spin } from "antd";

interface Props {}

class Loading extends React.Component<Props> {
  public render() {
    return (
      <Flex dir="c" alignH="center" alignV="center">
        <Spin size="large" tip="Chargement des données" />
      </Flex>
    );
  }
}

export default Loading;

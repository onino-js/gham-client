import * as React from "react";
import { Flex } from "../layout/Flex";
import styled from "../../styled-components";
import { _primary_font } from "../../css/_colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {}

const P = styled.p`
  font-size: 1.5em;
  color: ${_primary_font};
  margin-top: 20px;
`;

class NotReady extends React.Component<Props> {
  public render() {
    return (
      <Flex dir="c" alignH="center" alignV="center">
        <FontAwesomeIcon
          icon="exclamation-triangle"
          style={{ fontSize: "3em" }}
        />
        <P>Navré, cette fonctionnalité n'est pas disponible pour le moment</P>
      </Flex>
    );
  }
}

export default NotReady;

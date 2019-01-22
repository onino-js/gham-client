import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "../../styled-components";
import { _tertiary_bg, _primary_bg, _primary_font } from "../../css/_colors";
import { _center } from "../../css/styled-css";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface Props {
  icon?: IconProp;
  mt?: number;
}

interface IbigWarning {
  mt?: number;
}

const Container = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50px;
  background-color: ${_tertiary_bg};
  background-color: ${_primary_font};
  color: ${_primary_bg};
  ${_center}
  font-size : 3em;
  margin-top: ${(props: IbigWarning) => props.mt || 0}px;
`;

class BigWarning extends React.Component<Props> {
  public render() {
    return (
      <Container mt={this.props.mt}>
        <FontAwesomeIcon icon={this.props.icon || "exclamation"} />
      </Container>
    );
  }
}

export default BigWarning;

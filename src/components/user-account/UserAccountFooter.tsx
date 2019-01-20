// LIBS IMPORTS
import * as React from "react";
import styled from "../../styled-components";
import { _tertiary_bg } from "../../css/_colors";
import { UiStore } from "../../stores/ui/index";
import { withRouter } from "react-router";
import { Flex } from "../layout/Flex";

interface Props {
  uiStore?: UiStore;
  history: any;
  match: any;
  location: any;
}

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: space-between;
  height: 70px;
  width: 100%;
  background-color: ${_tertiary_bg};
  padding-right: 20px;
  padding-left: 20px;
`;

const LeftBox: any = styled(Flex).attrs({
  alignV: "center",
})`
  cursor: pointer;
  flex: 0;
`;

const RightBox: any = styled(Flex).attrs({
  alignH: "flex-end",
})`
  flex: 1;
`;

class UserAccountFooter extends React.Component<Props> {
  public render() {
    return (
      <Container>
        <LeftBox />
        <RightBox />
      </Container>
    );
  }
}

export default withRouter(UserAccountFooter);

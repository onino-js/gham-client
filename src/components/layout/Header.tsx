import * as React from "react";
import { inject, observer } from "mobx-react";
import styled from "../../styled-components";
import { UiStore } from "../../stores/ui/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { _secondary, _tertiary_bg } from "../../css/_colors";

interface Props {
  uiStore?: any;
}

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 70px;
  width: 100%;
  background-color: ${_tertiary_bg};
`;

const ArrowContainer: any = styled.div`
  cursor: pointer;
  padding-left: 20px;
  @media (min-width: 600px) {
    display: none;
  }
`;

@inject(({ uiStore }: { uiStore: UiStore }) => ({
  uiStore,
}))
@observer
class Header extends React.Component<Props> {
  public render() {
    const uiStore: UiStore = this.props.uiStore;
    const { toggleIsSidebarVisible } = uiStore;
    return (
      <Container>
        <ArrowContainer onClick={toggleIsSidebarVisible}>
          <FontAwesomeIcon icon="bars" style={{ fontSize: "3em" }} />
        </ArrowContainer>
        {this.props.children}
      </Container>
    );
  }
}

export default Header;

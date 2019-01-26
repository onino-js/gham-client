import * as React from "react";
import { Flex } from "./../../../layout/Flex";
import { UiStore } from "../../../../stores/ui";
import { UserStore } from "../../../../stores/user";
import { inject, observer } from "mobx-react";
import BigWarning from "../../../shared/BigWarning";
import styled from "../../../../styled-components";

interface Props {
  uiStore?: UiStore;
  userStore?: UserStore;
}

const P = styled.p`
  font-size: 1.5em;
  margin-top: 50px;
`;
const P2 = styled.p`
  font-size: 1em;
`;

@inject((allStores: any) => ({
  uiStore: allStores.uiStore,
  userStore: allStores.userStore,
}))
@observer
class NoProject extends React.Component<Props> {
  public render() {
    return (
      <Flex dir="c" alignH="center">
        <BigWarning icon="times" mt={50} />
        <P>Il n'y a actuellement aucun projet enregsitré</P>
        <P2>
          Pour créer un nouveau projet, cliquez sur la croix en haut à gauche de
          l'écran
        </P2>
      </Flex>
    );
  }
}

export default NoProject;

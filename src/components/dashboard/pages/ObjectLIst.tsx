import * as React from "react";
import { Flex } from "./../../layout/Flex";
import { UiStore } from "../../../stores/ui";
import { UserStore } from "../../../stores/user";
import { inject, observer } from "mobx-react";

interface Props {
  uiStore?: UiStore;
  userStore?: UserStore;
}

@inject((allStores: any) => ({
  uiStore: allStores.uiStore,
  userStore: allStores.userStore,
}))
@observer
class ObjectList extends React.Component<Props> {
  public render() {
    return (
      <Flex dir="c">
        <h2> Mes Objets </h2>
      </Flex>
    );
  }
}

export default ObjectList;

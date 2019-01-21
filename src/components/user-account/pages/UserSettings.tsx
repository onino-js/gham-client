import * as React from "react";
import { Flex } from "./../../layout/Flex";
import { UiStore } from "../../../stores/ui";
import { UserStore } from "../../../stores/user";
import { inject, observer } from "mobx-react";
import NotReady from "../../shared/NotReady";

interface Props {
  uiStore?: UiStore;
  userStore?: UserStore;
}

@inject((allStores: any) => ({
  uiStore: allStores.uiStore,
  userStore: allStores.userStore,
}))
@observer
class UserSettings extends React.Component<Props> {
  public render() {
    return (
      <Flex dir="c">
        <NotReady />
      </Flex>
    );
  }
}

export default UserSettings;

import * as React from "react";
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
class UserInformations extends React.Component<Props> {
  componentDidMount() {
    // getProjectList(console.log);
  }
  public render() {
    return <div>hey</div>;
  }
}

export default UserInformations;

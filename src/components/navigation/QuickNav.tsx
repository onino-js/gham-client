import * as React from "react";
import { UiStore } from "../../stores/ui";
import { UserStore } from "../../stores/user";
import { inject, observer } from "mobx-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  uiStore?: UiStore;
  userStore?: UserStore;
}

@inject((allStores: any) => ({
  uiStore: allStores.uiStore,
  userStore: allStores.userStore,
}))
@observer
class QuickNav extends React.Component<Props> {
  public render() {
    return <FontAwesomeIcon icon="bars" style={{fontSize : "2em"}} />;
  }
}

export default QuickNav;

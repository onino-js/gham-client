import * as React from "react";
import { inject, observer, Provider } from "mobx-react";
import Login from "./components/Login";
import Home from "./components/Home";
import authStore, { AuthStore } from "./stores/auth.store";
import { FullScreen } from "./components/shared/Styled";
import uiStore, { UiStore } from "./stores/ui.store";
import { AllStores } from "./models/all.stores.model";
import projectStore from "./stores/project.store";
import mapStore from "./stores/map.store";
import contactStore from "./stores/contact.store";

interface Props {
  uiStore?: UiStore;
  authStore?: AuthStore;
  isLogged?: boolean;
}

const Container = FullScreen.extend`
  /* display: flex;
  align-items: center;
  justify-content: center; */
  overflow: hidden;
`;

@inject((allStores: AllStores) => ({
  uiStore: allStores.uiStore,
  isLogged: allStores.authStore.isLogged,
}))
@observer
class AppTemplate extends React.Component<Props> {
  public state = {
    collapsed: false,
  };

  public render() {
    return <Container>{!this.props.isLogged ? <Home /> : <Login />}</Container>;
  }
}

const App = (
  <Provider
    mapStore={mapStore}
    uiStore={uiStore}
    projectStore={projectStore}
    authStore={authStore}
    contactStore={contactStore}
  >
    <AppTemplate />
  </Provider>
);

export default App;

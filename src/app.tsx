import * as React from "react";
import { inject, observer, Provider } from "mobx-react";
import Login from "./components/Login";
import authStore, { AuthStore } from "./stores/auth.store";
import { FullScreen } from "./components/shared/Styled";
import uiStore, { UiStore } from "./stores/ui.store";
import { AllStores } from "./models/all.stores.model";
import projectStore from "./stores/project.store";
import mapStore from "./stores/map.store";
import contactStore from "./stores/contact.store";
import canvasStore from "./stores/canvas.store";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";

interface Props {
  uiStore?: UiStore;
  authStore?: AuthStore;
  isLogged?: boolean;
}

@inject((allStores: AllStores) => ({
  uiStore: allStores.uiStore,
  isLogged: allStores.authStore.isLogged,
}))
@observer
class AppTemplate extends React.Component<Props> {
  public render() {
    return (
      <FullScreen>{!this.props.isLogged ? <Home /> : <Login />}</FullScreen>
    );
  }
}

const App = (
  <Router>
    <Provider
      mapStore={mapStore}
      uiStore={uiStore}
      projectStore={projectStore}
      authStore={authStore}
      contactStore={contactStore}
      canvasStore={canvasStore}
    >
      <AppTemplate />
    </Provider>
  </Router>
);

export default App;

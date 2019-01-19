import * as React from "react";
import { inject, observer, Provider } from "mobx-react";
import Login from "./components/Login";
import authStore, { AuthStore } from "./stores/auth/index";
import uiStore, { UiStore } from "./stores/ui/index";
import { AllStores } from "./models/all.stores.model";
import projectStore from "./stores/project.store";
import mapStore from "./stores/map.store";
import contactStore from "./stores/contact.store";
import canvasStore from "./stores/canvas.store";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import { FullScreen } from "./components/layout/FullScreen";
import Report from "./components/report/Report";
import ReportRoutes from "./components/report/ReportRoutes";

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
      // <FullScreen>{!this.props.isLogged ? <Home /> : <Login />}</FullScreen>
      <Router>
        <FullScreen>
          <Route path="/login" component={Login} />
          {/* <Route path="/report" render={() => <Report />} /> */}
          <Route path="/report" component={Report} />
          <Route exact path="/" component={Home} />
        </FullScreen>
      </Router>
    );
  }
}

const App = (
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
);

export default App;

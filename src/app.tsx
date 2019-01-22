import * as React from "react";
import { inject, observer, Provider } from "mobx-react";
import Login from "./components/Login";
import authStore, { AuthStore } from "./stores/auth/index";
import uiStore, { UiStore } from "./stores/ui/index";
import { AllStores } from "./models/all.stores.model";
import mapStore from "./stores/map.store";
import contactStore from "./stores/contact.store";
import canvasStore from "./stores/canvas.store";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FullScreen } from "./components/layout/FullScreen";
import Report from "./components/report/Report";
import userStore from "./stores/user";
import DashBoard from "./components/dashboard/DashBoard";
import Welcome from "./components/Welcome";
import ProjectHome from "./components/project/ProjectHome";
import UserAccount from "./components/user-account/UserAccount";
import domainStore from "./stores/domain";

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
          <Route path="/dashboard" component={DashBoard} />
          <Route path="/project" component={ProjectHome} />
          <Route path="/user-account" component={UserAccount} />
          <Route exact path="/" component={Welcome} />
        </FullScreen>
      </Router>
    );
  }
}

const App = (
  <Provider
    mapStore={mapStore}
    uiStore={uiStore}
    domainStore={domainStore}
    authStore={authStore}
    contactStore={contactStore}
    canvasStore={canvasStore}
    userStore={userStore}
  >
    <AppTemplate />
  </Provider>
);

export default App;

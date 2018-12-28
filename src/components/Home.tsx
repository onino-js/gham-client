// LIBS IMPORTS
import * as React from "react";
import { inject, observer } from "mobx-react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Layout } from "antd";
import styled from "../styled-components";
import { AllStores } from "../models/all.stores.model";
import General from "./General";
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import Exports from "./Export";
import Photo from "./photo/Photo";
import { MapView } from "./Map";
import Inputs from "./inputs/Inputs";
import Signature from "./Signature";
import WorkoutBefore from "./photo/WorkoutBefore";
import WorkoutAfter from "./photo/WorkoutAfter";
import SideMenu from "./shared/SideMenu";

interface Props {
  uiStore?: any;
}

const AppLayout = styled(Layout)`
  height: 100vh;
`;

const ColLayout = AppLayout.extend`
  display: flex;
  flex-direction: column;
`;

const Content = styled(Layout.Content)`
  padding: 20px;
  min-width: 340px;
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  align-items: center;
`;

@inject((allStores: AllStores) => ({
  uiStore: allStores.uiStore,
}))
@observer
class Home extends React.Component<Props> {
  public state = {
    collapsed: false,
  };

  public render() {
    return (
      <Router>
        <AppLayout>
          <ColLayout>
            <Header />
            <Content>
              <SideMenu />
              {/* <Route path="/" exact component={General} /> */}
              <Route path="/general/" exact component={General} />
              <Route path="/equipements/" component={Inputs} />
              <Route path="/export/" component={Exports} />
              <Route path="/photo/" component={Photo} />
              <Route path="/workout-before/" component={WorkoutBefore} />
              <Route path="/workout-after/" component={WorkoutAfter} />
              <Route path="/map/" component={MapView} />
              <Route path="/signature/" component={Signature} />
            </Content>
            <Footer />
          </ColLayout>
        </AppLayout>
      </Router>
    );
  }
}

export default Home;

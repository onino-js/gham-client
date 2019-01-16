// LIBS IMPORTS
import * as React from "react";
import { Route } from "react-router-dom";
import General from "./../project/General";
import Exports from "./../project/Export";
import Photo from "./../inputs/photo/Photo";
import { MapView } from "./../project/Map";
import Signature from "./../inputs/Signature";
import WorkoutBefore from "./../inputs/photo/WorkoutBefore";
import WorkoutAfter from "./../inputs/photo/WorkoutAfter";
import { Contact } from "./../inputs/Contact";
import { Coffret } from "./../inputs/Coffret";
import { Compteur } from "./../inputs/Compteur";
import { Linking } from "./../inputs/Linking";
import { Observations } from "./../inputs/Observations";
import Preview from "./Preview";

interface Props {
  uiStore?: any;
}

class ReportRoutes extends React.Component<Props> {
  public render() {
    return (
      <React.Fragment>
        <Route path="/general/" exact component={General} />
        <Route path="/contact/" exact component={Contact} />
        <Route path="/coffret/" exact component={Coffret} />
        <Route path="/compteur/" exact component={Compteur} />
        <Route path="/liaison/" exact component={Linking} />
        <Route path="/observations/" exact component={Observations} />
        <Route path="/export/" component={Exports} />
        <Route path="/photo/" component={Photo} />
        <Route path="/workout-before/" component={WorkoutBefore} />
        <Route path="/workout-after/" component={WorkoutAfter} />
        <Route path="/map/" component={MapView} />
        <Route path="/signature/" component={Signature} />
        <Route path="/preview/" component={Preview} />
      </React.Fragment>
    );
  }
}

export default ReportRoutes;

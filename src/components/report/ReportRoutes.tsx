import * as React from "react";
import { Route } from "react-router-dom";
import Photo from "./steps/Photo";
import Signature from "./steps/Signature";
import WorkoutBefore from "./steps/WorkoutBefore";
import WorkoutAfter from "./steps/WorkoutAfter";
import { Contact } from "./steps/Contact";
import { Coffret } from "./steps/Coffret";
import { Compteur } from "./steps/Compteur";
import { Linking } from "./steps/Linking";
import { Observations } from "./steps/Observations";
import ReportPreview from "./pages/ReportPreview";
import { ReportMap } from "./pages/ReportMap";
import { ReportRef } from "./pages/ReportRef";
import ReportExport from "./pages/ReportExport";

interface Props {
  uiStore?: any;
  match?: any;
}

class ReportRoutes extends React.Component<Props> {
  public render() {
    return (
      <React.Fragment>
        <Route path={`/report/general`} exact component={ReportRef} />
        <Route path={`/report/reference`} exact component={ReportRef} />
        <Route path={`/report/contact`} exact component={Contact} />
        <Route path={`/report/coffret`} exact component={Coffret} />
        <Route path={`/report/compteur`} exact component={Compteur} />
        <Route path={`/report/liaison`} exact component={Linking} />
        <Route path={`/report/observations`} exact component={Observations} />
        <Route path={`/report/export`} component={ReportExport} />
        <Route path={`/report/photo`} component={Photo} />
        <Route path={`/report/workout-before`} component={WorkoutBefore} />
        <Route path={`/report/workout-after`} component={WorkoutAfter} />
        <Route path={`/report/map`} component={ReportMap} />
        <Route path={`/report/signature`} component={Signature} />
        <Route path={`/report/preview`} component={ReportPreview} />
        <Route path={`/`} exact component={ReportRef} />
      </React.Fragment>
    );
  }
}

export default ReportRoutes;

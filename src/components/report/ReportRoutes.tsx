import * as React from "react";
import { Route, RouteComponentProps } from "react-router-dom";
import Photo from "./steps/Photo";
import Signature from "./steps/Signature";
import WorkoutBefore from "./steps/WorkoutBefore";
import WorkoutAfter from "./steps/WorkoutAfter";
import { Contact } from "./steps/Contact";
import { Coffret } from "./steps/Coffret";
import { Compteur } from "./steps/Compteur";
import { Linking } from "./steps/Linking";
import { Observations } from "./steps/Observations";
import Preview from "./Preview";
import { ReportMap } from "./ReportMap";
import { ReportRef } from "./ReportRef";
import ReportExport from "./ReportExport";

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
        <Route path={`/report/preview`} component={Preview} />
        <Route path={`/`} exact component={ReportRef} />
      </React.Fragment>
    );
  }
}

// class ReportRoutes extends React.Component<Props> {
//   public render() {
//     const match = this.props.match;
//     return (
//       <React.Fragment>
//         <Route path={`${match.url}/`} exact component={ReportRef} />
//         <Route path={`${match.url}/reference`} exact component={ReportRef} />
//         <Route path={`${match.url}/contact/`} exact component={Contact} />
//         <Route path={`${match.url}/coffret/`} exact component={Coffret} />
//         <Route path={`${match.url}/compteur/`} exact component={Compteur} />
//         <Route path={`${match.url}/liaison/`} exact component={Linking} />
//         <Route
//           path={`${match.url}/observations/`}
//           exact
//           component={Observations}
//         />
//         <Route path={`${match.url}/export/`} component={ReportExport} />
//         <Route path={`${match.url}/photo/`} component={Photo} />
//         <Route
//           path={`${match.url}/workout-before/`}
//           component={WorkoutBefore}
//         />
//         <Route path={`${match.url}/workout-after/`} component={WorkoutAfter} />
//         <Route path={`${match.url}/map/`} component={ReportMap} />
//         <Route path={`${match.url}/signature/`} component={Signature} />
//         <Route path={`${match.url}/preview/`} component={Preview} />
//       </React.Fragment>
//     );
//   }
// }

export default ReportRoutes;

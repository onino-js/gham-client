import * as firebase from "firebase";
import "firebase/database";

const config = {
  apiKey: "AIzaSyBDHfw2EEgmWWIE7V7lPgpPLScx8C3lnVo",
  authDomain: "gham-f07f7.firebaseapp.com",
  databaseURL: "https://gham-f07f7.firebaseio.com",
  projectId: "gham-f07f7",
  storageBucket: "gham-f07f7.appspot.com",
  messagingSenderId: "1065942140105",
};

firebase.initializeApp(config);
const database = firebase.database();

export const saveReport = (doc: any, callback?: any) => {
  database.ref(`reports/${doc.reference}/${doc.id}`).set(doc, (e: any) => {
    if (callback) {
      callback(e);
    }
  });
};

export const updateReport = (id: string, doc: any, callback?: any) => {
  database.ref(`reports/${id}`).update(doc, (e: any) => {
    if (callback) {
      callback(e);
    }
  });
};

export const deleteReport = (id: string, callback: any) => {
  database.ref(`reports/${id}`).remove((e: any) => {
    callback(e);
  });
};

export const getReportsList = (callback: any) => {
  var reports = database.ref("projects/");
  reports.on("value", function(res: any) {
    callback(res.val());
  });
};

export const getReportList = (callback: any) => {
  var reports = database.ref(`reports/`);
  reports.on("value", function(res: any) {
    callback(res.val());
  });
};

export const createReport = (report: any, callback: any) => {
  const ref1 = database.ref(`reports/`).push();
  ref1.set(report, (e: any) => {
    callback(e);
  });
};

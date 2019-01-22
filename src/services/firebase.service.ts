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

export const saveProject = (doc: any, callback: any) => {
  const ref = database.ref(`projects/`).push();
  ref.set(doc, (e: any) => {
    callback(e);
  });
};

export const removeProject = (id: string, callback: any) => {
  database.ref(`projects/${id}`).set(null, (e: any) => {
    callback(e);
  });
};

export const deleteProject = (id: string, callback: any) => {
  database.ref(`projects/${id}`).remove((e: any) => {
    callback(e);
  });
};

export const getProjectsList = (callback: any) => {
  var reports = database.ref("projects/");
  reports.on("value", function(res: any) {
    callback(res.val());
  });
};

export const getReportList = (projectId: string, callback: any) => {
  var reports = database.ref(`reports/${projectId}`);
  reports.on("value", function(res: any) {
    callback(res.val());
  });
};

export const createReport = (report: any, projectId: string, callback: any) => {
  const ref1 = database.ref(`reports/${projectId}`).push();
  ref1.set(report, (e: any) => {
    callback(e);
  });
};

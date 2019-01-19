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

export const saveDocument = (doc: any, callback?: any) => {
  database.ref(`reports/${doc.reference}`).set(doc, (e: any) => {
    console.log(e);
    console.log("returned");
  });
};

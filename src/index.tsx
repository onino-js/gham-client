import "antd/dist/antd.css";
// import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./app";
import "./css/leaflet.css";
import "./css/index.css";
// import "leaflet/dist/leaflet.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faSyncAlt,
  faPlus,
  faTrash,
  faPenAlt,
  faPen,
  faFilePdf,
  faFileWord,
  faCode,
  faFileDownload,
  faSearch,
  faSquare,
  faUpload,
  faMapMarkerAlt,
  faCamera,
  faCircle,
  faTimes,
  faFont,
  faHandPaper,
  faUndo,
  faRedo,
  faLock,
  faLockOpen,
  faSlash,
  faImage,
} from "@fortawesome/free-solid-svg-icons";

library.add(faBars);
library.add(faSyncAlt);
library.add(faPlus);
library.add(faTrash);
library.add(faPenAlt);
library.add(faPen);
library.add(faFilePdf);
library.add(faFileWord);
library.add(faCode);
library.add(faFileDownload);
library.add(faSearch);
library.add(faSquare);
library.add(faUpload);
library.add(faMapMarkerAlt);
library.add(faCamera);
library.add(faCircle);
library.add(faTimes);
library.add(faFont);
library.add(faHandPaper);
library.add(faUndo);
library.add(faRedo);
library.add(faLock);
library.add(faLockOpen);
library.add(faSlash);
library.add(faImage);

import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(App, document.getElementById("root") as HTMLElement);
registerServiceWorker();

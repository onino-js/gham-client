import NewReport from "./NewReport";
import { Ipage } from "./../../dashboard/pages/index";
import ReportList from "./ReportList";
import { ProjectInfo } from "./ProjectInfo";

const projectPages: Ipage[] = [
  {
    link: "",
    component: ProjectInfo,
    title: "Projet",
    icon: "plus",
  },
  {
    link: "new-report",
    component: NewReport,
    title: "Nouveau rapport",
    icon: "plus",
  },
  {
    link: "report-list",
    component: ReportList,
    title: "Rapports",
    icon: "plus",
  },
];

export default projectPages;

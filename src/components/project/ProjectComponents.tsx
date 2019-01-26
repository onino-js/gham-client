import ReportList from "./pages/ReportList/index";
import { ProjectInfo } from "./pages/ProjectInfo";
import { IpageComponent } from "../../models/layout.models";
import ProjectStats from "./pages/ProjectStats";
import ProjectActions from "./actions/ProjectActions";
import ProjectMap from "./pages/ProjectMap";

export const ProjectComponents: IpageComponent[] = [
  {
    link: "project-general",
    component: ProjectInfo,
    title: "Général",
    icon: "question-circle",
    actions: ProjectActions,
  },
  {
    link: "report-list",
    component: ReportList,
    title: "Rapports",
    icon: "clipboard-list",
    actions: ProjectActions,
  },
  {
    link: "project-map",
    component: ProjectMap,
    title: "Carte",
    icon: "map-marker-alt",
    actions: ProjectActions,
  },
  {
    link: "project-stats",
    component: ProjectStats,
    title: "Statistiques",
    icon: "chart-pie",
    actions: ProjectActions,
  },
];

export default ProjectComponents;

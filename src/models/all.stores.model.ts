import { UserStore } from "./../stores/user/index";
import { ReportStore } from "./../stores/report/index";
import { ContactStore } from "./../stores/contact.store";
import { MapStore } from "./../stores/map.store";
import { AuthStore } from "../stores/auth/index";
import { UiStore } from "../stores/ui/index";
import { CanvasStore } from "../stores/canvas.store";
import { ProjectStore } from "../stores/projects";
import { DashBoardStore } from "../stores/dashboard";

export interface AllStores {
  uiStore: UiStore;
  authStore: AuthStore;
  mapStore: MapStore;
  contactStore: ContactStore;
  canvasStore: CanvasStore;
  reportStore: ReportStore;
  userStore: UserStore;
  projectStore: ProjectStore;
  dashBoardStore: DashBoardStore;
}

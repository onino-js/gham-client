import { UserStore } from "./../stores/user/index";
import { ReportStore } from "./../stores/report/index";
import { MapStore } from "./../stores/map.store";
import { AuthStore } from "../stores/auth/index";
import { UiStore } from "../stores/ui/index";
import { CanvasStore } from "../stores/canvas.store";
import { DomainStore } from "../stores/domain";

export interface AllStores {
  uiStore: UiStore;
  authStore: AuthStore;
  mapStore: MapStore;
  canvasStore: CanvasStore;
  reportStore: ReportStore;
  userStore: UserStore;
  domainStore: DomainStore;
}

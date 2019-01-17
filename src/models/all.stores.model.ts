import { ContactStore } from "./../stores/contact.store";
import { MapStore } from "./../stores/map.store";
import { AuthStore } from "../stores/auth/index";
import { UiStore } from "../stores/ui/index";
import { ProjectStore } from "../stores/project.store";
import { CanvasStore } from "../stores/canvas.store";

export interface AllStores {
  uiStore: UiStore;
  authStore: AuthStore;
  projectStore: ProjectStore;
  mapStore: MapStore;
  contactStore: ContactStore;
  canvasStore: CanvasStore;
}

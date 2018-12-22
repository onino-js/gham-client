import { ContactStore } from "./../stores/contact.store";
import { MapStore } from "./../stores/map.store";
import { AuthStore } from "./../stores/auth.store";
import { UiStore } from "../stores/ui.store";
import { ProjectStore } from "../stores/project.store";

export interface AllStores {
  uiStore: UiStore;
  authStore: AuthStore;
  projectStore: ProjectStore;
  mapStore: MapStore;
  contactStore: ContactStore;
}

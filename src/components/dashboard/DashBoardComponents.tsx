import * as React from "react";
import UserLists from "./pages/UserLists";
import ObjectList from "./pages/ObjectLIst";
import ImageList from "./pages/ImageList";
import ProjectList from "./pages/ProjectList";
import ContactList from "./pages/ContactList";
import DashBoardCrudActions from "./actions/DashBoardCrudActions";
import RemoveProject from "./modals/RemoveProject";
import NewProject from "./modals/NewProject";
import { IpageComponent } from "../../models/layout.models";

const DashBoardComponents: IpageComponent[] = [
  {
    link: "project-list",
    component: ProjectList,
    title: "Mes projets",
    icon: "clipboard-list",
    actions: DashBoardCrudActions,
    modals: () => (
      <React.Fragment>
        <NewProject />
        <RemoveProject />
      </React.Fragment>
    ),
  },
  {
    link: "user-list",
    component: UserLists,
    title: "Mes listes",
    icon: "list-ol",
  },
  {
    link: "object-list",
    component: ObjectList,
    title: "Mes objets",
    icon: "object-group",
  },
  {
    link: "image-list",
    component: ImageList,
    title: "Mes images",
    icon: "image",
  },
  {
    link: "contact-list",
    component: ContactList,
    title: "Mes contacts",
    icon: "users",
  },
];

export default DashBoardComponents;

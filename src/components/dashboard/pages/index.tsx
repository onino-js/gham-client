import * as React from "react";

import UserLists from "./UserLists";
import ObjectList from "./ObjectLIst";
import ImageList from "./ImageList";
import ProjectList from "./ProjectList";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import ContactList from "./ContactList";
import DashBoardCrudActions from "../actions/DashBoardCrudActions";
import RemoveProject from "../modals/RemoveProject";
import NewProject from "../modals/NewProject";

export interface Ipage {
  link: string;
  component: React.ReactNode;
  title: string;
  icon: IconProp;
  actions?: React.ReactNode;
  modals?: React.ReactNode;
}

const pages: Ipage[] = [
  {
    link: "",
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
    link: "objects-list",
    component: ObjectList,
    title: "Mes objets",
    icon: "object-group",
  },
  {
    link: "images-list",
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

export default pages;

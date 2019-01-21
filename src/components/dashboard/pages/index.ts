import UserLists from "./UserLists";
import ObjectList from "./ObjectLIst";
import ImageList from "./ImageList";
import ProjectList from "./ProjectList";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import ContactList from "./ContactList";

export interface Ipage {
  link: string;
  component: React.ReactNode;
  title: string;
  icon: IconProp;
}

const pages: Ipage[] = [
  {
    link: "",
    component: ProjectList,
    title: "Mes projets",
    icon: "clipboard-list",
  },
  // {
  //   link: "new-project",
  //   component: NewProject,
  //   title: "Nouveau projet",
  //   icon: "plus",
  // },
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

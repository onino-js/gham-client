import { IconProp } from "@fortawesome/fontawesome-svg-core";
import UserInformations from "./UserInformations";

export interface Ipage {
  link: string;
  component: React.ReactNode;
  title: string;
  icon: IconProp;
}

const userAccountPages: Ipage[] = [
  {
    link: "",
    component: UserInformations,
    title: "Mes informations",
    icon: "user",
  },
];

export default userAccountPages;

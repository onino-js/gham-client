import { IconProp } from "@fortawesome/fontawesome-svg-core";
import UserInformations from "./UserInformations";
import UserBills from "./UserBills";
import UserSettings from "./UserSettings";

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
  {
    link: "user-bills",
    component: UserBills,
    title: "Mes factures",
    icon: "user",
  },
  {
    link: "user-settings",
    component: UserSettings,
    title: "Mes paramètres",
    icon: "user",
  },
];

export default userAccountPages;

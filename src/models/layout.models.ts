import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface IpageComponent {
  link: string;
  component: React.ReactNode;
  title: string;
  icon: IconProp;
  actions?: React.ReactNode;
  modals?: any;
}

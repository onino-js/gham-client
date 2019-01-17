import { observable, action } from "mobx";
import { navItems } from "../../data/nav-items.data";

interface Ipayload {
  key: keyof ReportStore;
  value: any;
}

export class ReportStore {
  @observable public activePageIndex: number = 0;
}

const reportStore = new ReportStore();
export default reportStore;

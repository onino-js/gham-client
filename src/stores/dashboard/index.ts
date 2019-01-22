import { observable, action } from "mobx";

interface Ipayload {
  key: keyof DashBoardStore;
  value: any;
}
interface IpayloadBool {
  key: keyof DashBoardStore;
  value: boolean;
}

export interface Iobject {
  id: string | null;
}

type IactivePage = "project";

// interface Imapping {
//   [key: IactivePage] : keyof DashBoardStore;
// }

const addItemMapping: any = {
  project: "showNewProject",
};
const removeItemMapping: any = {
  project: "showRemoveProject",
};

export class DashBoardStore {
  @observable public selectedObject: Iobject = { id: null };
  @observable public showNewProject: boolean = false;
  @observable public showRemoveProject: boolean = false;
  @observable public activePage: IactivePage | null = null;

  @action.bound
  public setProp(payload: Ipayload): void {
    const key: keyof DashBoardStore = payload.key;
    if (this.hasOwnProperty(key)) {
      this[key] = payload.value;
    } else {
      const err = new Error();
      err.message = `Property ${key} does not exist on DashBoardStore`;
      throw err;
    }
  }

  @action.bound
  requestAddItem() {
    this.activePage !== null &&
      this.setProp({
        key: addItemMapping[this.activePage],
        value: true,
      });
  }

  @action.bound
  requestRemoveItem() {
    this.activePage !== null &&
      this.setProp({
        key: removeItemMapping[this.activePage],
        value: true,
      });
    // this.selectedObject = { id: null };
  }

  @action.bound
  public resetSelection(): void {
    this.selectedObject = {
      id: null,
    };
  }

  // @action.bound
  // public toggleBool = (payload: IpayloadBool): void => {
  //   const key: keyof DashBoardStore = payload.key;
  //   if (this.hasOwnProperty(key)) {
  //     this[key] = payload.value;
  //   } else {
  //     const err = new Error();
  //     err.message = `Property ${key} does not exist on DashBoardStore`;
  //     throw err;
  //   }
  // };
}

const dashBoardStore = new DashBoardStore();
export default dashBoardStore;

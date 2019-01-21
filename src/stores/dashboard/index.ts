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

export class DashBoardStore {
  @observable public selectedObject: Iobject = { id: null };

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

import { observable, action } from "mobx";
import { Istep, steps } from "./steps";

interface Ipayload {
  key: keyof UiStore;
  value: any;
}
interface IpayloadBool {
  key: keyof UiStore;
  value: boolean;
}

const event = new Event("bar-slide");

export class UiStore {
  @observable public isSidebarVisible: boolean = false;
  @observable public isLoadingData: boolean = false;
  @observable public isSignatureVisible: boolean = false;
  @observable public isPreviewVisible: boolean = false;
  @observable public isCanvasAddItemVisible: boolean = false;
  @observable public isCanvasItemOptionsVisible: boolean = false;
  @observable public isEditBgVisible: boolean = false;
  @observable public steps: Istep[] = steps;

  @action.bound
  public setProp(payload: Ipayload): void {
    const key: keyof UiStore = payload.key;
    if (this.hasOwnProperty(key)) {
      this[key] = payload.value;
    } else {
      const err = new Error();
      err.message = `Property ${key} does not exist on UiStore`;
      throw err;
    }
  }

  @action.bound
  public toggleIsSidebarVisible = (): void => {
    window.dispatchEvent(event);
    this.isSidebarVisible = !this.isSidebarVisible;
  };

  @action.bound
  public toggleBool = (payload: IpayloadBool): void => {
    const key: keyof UiStore = payload.key;
    if (this.hasOwnProperty(key)) {
      this[key] = payload.value;
    } else {
      const err = new Error();
      err.message = `Property ${key} does not exist on UiStore`;
      throw err;
    }
  };
}

const uiStore = new UiStore();
export default uiStore;

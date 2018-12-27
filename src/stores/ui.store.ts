import { observable, action } from "mobx";

interface IpayloadBool {
  key: keyof UiStore;
  value: boolean;
}

const event = new Event("bar-slide");

export class UiStore {
  @observable public isSidebarVisible: boolean = true;
  @observable public isSignatureVisible: boolean = false;
  @observable public isPreviewVisible: boolean = false;
  @observable public isCanvasAddItemVisible: boolean = false;
  @observable public isCanvasItemOptionsVisible: boolean = false;
  @observable public isEditBgVisible: boolean = false;

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
      err.message = `Property ${key} does not exist on ContactStore`;
      throw err;
    }
  };
}

const uiStore = new UiStore();
export default uiStore;

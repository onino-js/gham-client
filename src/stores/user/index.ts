import { observable, action, computed } from "mobx";

interface Ipayload {
  key: keyof UserStore;
  value: any;
}

export class UserStore {
  @observable public projectIds: string[] = [];
  @observable public firstName: string = "";
  @observable public lastName: string = "Hameury";
  @observable public newProjectId: string = "";

  constructor() {}

  @action.bound
  public setProjectIds(payload: string[]): void {
    this.projectIds = payload;
  }

  @action.bound
  public getNumberOfProjects(): number {
    return this.projectIds.length;
  }

  @action.bound
  public setProp(payload: Ipayload): void {
    const key: keyof UserStore = payload.key;
    if (this.hasOwnProperty(key) && key !== "isProjectIdValid") {
      this[key] = payload.value;
    } else {
      const err = new Error();
      err.message = `Property ${key} does not exist on UserStore`;
      throw err;
    }
  }

  @computed get isProjectIdValid() {
    if (this.newProjectId === "") return false;
    else {
      if (
        this.newProjectId.match(/^-{0,1}\d+$/) &&
        this.newProjectId.length !== 7
      ) {
        return false;
      } else {
        return true;
      }
    }
  }
}

const userStore = new UserStore();
export default userStore;

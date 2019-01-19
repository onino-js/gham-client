import { observable, action, computed } from "mobx";

interface Ipayload {
  key: keyof ProjectStore;
  value: any;
}

export class ProjectStore {
  @observable public title: string = "";
  // @observable public description: string = "";
  @observable public reference: string = "";
  @observable public refPrefix: string = "R31";
  @observable public reporterName: string = "Benjamin Hameury";
  @observable public reportDate: Date = new Date();
  @observable public numberOfReports: number = 0;
  @observable public reportsIds: string[] = [];

  @action.bound
  public setProp(payload: Ipayload): void {
    const key: keyof ProjectStore = payload.key;
    if (this.hasOwnProperty(key) && key !== "isReferenceValid") {
      this[key] = payload.value;
    } else {
      const err = new Error();
      err.message = `Property ${key} does not exist on ProjectStore`;
      throw err;
    }
  }

  @action.bound
  public setReference(payload: string): void {
    this.reference = payload.toUpperCase();
  }

  @action.bound
  public setRefPrefix(payload: string): void {
    this.refPrefix = payload;
  }

  @action.bound
  public getNumberOfReports(): number {
    return this.reportsIds.length;
  }

  @computed get isReferenceValid() {
    if (this.reference === "") return false;
    else {
      if (this.reference.match(/^-{0,1}\d+$/) && this.reference.length !== 7) {
        return false;
      } else {
        return true;
      }
    }
  }
}

const projectStore = new ProjectStore();
export default projectStore;

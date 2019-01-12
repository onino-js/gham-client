import { observable, action, computed } from "mobx";

export class ProjectStore {
  @observable public title: string = "";
  // @observable public description: string = "";
  @observable public reference: string = "";
  @observable public refPrefix: string = "R31";
  @observable public address: string = "";
  @observable public zipCode: number = 0;
  @observable public city: string = "";
  @observable public reporterName: string = "Benjamin Hameury";
  @observable public reportDate: Date = new Date();

  constructor() {
    this.title = "";
    this.reference = "";
  }

  @action.bound
  public setTitle(payload: string): void {
    this.title = payload;
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
  public setZip(newZip: number): void {
    this.zipCode = newZip;
  }
  @action.bound
  public setCity(newCity: string): void {
    this.city = newCity;
  }
  @action.bound
  public setAddress(newAdress: string): void {
    this.address = newAdress;
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

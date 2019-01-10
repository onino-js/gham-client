import { observable, action } from "mobx";

export class ProjectStore {
  @observable public title: string = "";
  @observable public description: string = "";
  @observable public reference: string = "";
  @observable public address: string = "";
  @observable public zipCode: number = 0;
  @observable public city: string = "";
  @observable public reporterName: string = "Benjamin Hameury";
  @observable public reportDate: Date = new Date();

  constructor() {
    this.title = "";
    this.description = "";
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
  public setDescription(payload: string): void {
    this.description = payload;
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
}

const projectStore = new ProjectStore();
export default projectStore;

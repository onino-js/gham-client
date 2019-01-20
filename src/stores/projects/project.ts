import { observable, action, computed } from "mobx";
import userStore from "../user";

interface Ipayload {
  key: keyof Project;
  value: any;
}

type Istatus = "new" | "warning" | "error" | "done";

export interface IprojectJSON {
  reference: string;
  refPrefix: string;
  reporterName: string;
  projectDate: Date;
  numberOfReports: number;
  reportsIds: string[];
  status: Istatus;
}

export interface InewProjectJSON {
  reference?: string;
  refPrefix?: string;
  reporterName?: string;
  projectDate?: Date;
  numberOfReports?: number;
  reportsIds?: string[];
  status?: Istatus;
}

export class Project implements IprojectJSON {
  @observable public id: string = "";
  @observable public reference: string = "";
  @observable public refPrefix: string = "R31";
  @observable public reporterName: string = "";
  @observable public projectDate: Date = new Date();
  @observable public numberOfReports: number = 0;
  @observable public reportsIds: string[] = [];
  @observable public status: Istatus = "new";

  constructor(newProject: InewProjectJSON) {
    Object.assign(this, newProject);
  }

  @action.bound
  public setProp(payload: Ipayload): void {
    const key: keyof Project = payload.key;
    if (
      this.hasOwnProperty(key) &&
      key !== "isReferenceValid" &&
      key !== "asJson"
    ) {
      this[key] = payload.value;
    } else {
      const err = new Error();
      err.message = `Property ${key} does not exist on Project`;
      throw err;
    }
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
  @computed get asJson(): IprojectJSON {
    const res = {
      id: this.id,
      reference: this.reference,
      refPrefix: this.refPrefix,
      reporterName: this.reporterName,
      projectDate: this.projectDate,
      numberOfReports: this.numberOfReports,
      reportsIds: this.reportsIds,
      status: this.status,
    };
    return res;
  }
  // @computed get id() {
  //   const id = `${userStore.lastName}_${this.reference}`;
  //   return id;
  // }
}

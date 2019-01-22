import { message } from "antd";
import { observable, action, toJS } from "mobx";
import { navItems } from "../../data/nav-items.data";
import { saveReport } from "../../services/firebase.service";

interface Ipayload {
  key: keyof ReportStore;
  value: any;
}

type Istatus = "new" | "warnings" | "done";

export class ReportStore {
  // MAIN INFORMATIONS
  @observable public reference: string = "";
  @observable public creationDate: string = "";
  @observable public lastModifDate: string = "";
  @observable public status: Istatus = "new";

  @observable public reportDate: Date = new Date();

  @observable public genre: string = "";
  @observable public _genre: string = "";
  @observable public occupation: string = "";

  @observable public lastName: string = "";
  @observable public firstName: string = "";
  @observable public address: string = "";
  @observable public city: string = "";
  @observable public phone: string = "";
  @observable public co_lastName: string = "";
  @observable public co_firstName: string = "";
  @observable public co_address: string = "";
  @observable public co_city: string = "";
  @observable public co_phone: string = "";

  // BRANCHEMENTS
  @observable public linking: string = "";
  @observable public nbOfYears: string = "";

  // COFFRET
  @observable public fixation: string = "";
  @observable public boitierType: string = "";
  @observable public poseBp: string = "";

  @observable public action: string = "";
  @observable public _fixation: string = "";

  @observable public coffretType: string = "";
  @observable public _coffretType: string = "";
  @observable public _poseBp: string = "";

  // COMPTEUR
  @observable public compteurBrand: string = "";
  @observable public compteurType: string = "";
  @observable public compteurFlow: string = "";
  @observable public compteurYear: string = "";
  @observable public compteurNumber: string = "";
  @observable public compteurConserv: string = "";

  // ARRIVAL
  @observable public arrivalNature: string = "";
  @observable public arrivalDiameter: string = "";

  // PENETRATION
  @observable public penetrationNature: string = "";
  @observable public penetrationDiameter: string = "";
  @observable public penetrationConserved: string = "";
  @observable public _penetrationNature: string = "";
  @observable public _penetrationDiameter: string = "";
  @observable public _penetrationLength: string = "";

  // DETENTE
  @observable public detenteType: string = "";
  @observable public detentePose: string = "";

  // OBSERVATIONS
  @observable public obsTerass: string = "";
  @observable public obsSaignee: string = "";
  @observable public obsPerc: string = "";
  @observable public obsRemarks: string = "";

  // PHOTOS
  @observable public photo: string = "";
  @observable public photoBeforeWork: string = "";
  @observable public photoAfterWork: string = "";
  @observable public photoObjects: any = {
    photo: [],
    photoBeforeWork: [],
    photoAfterWork: [],
  };
  // SIGNATURE
  @observable public signature: string = "";

  // COMPLETION
  @observable public completion: any[] = navItems.slice().map((item: any) => {
    item.errors = [];
    return item;
  });

  @action.bound
  public setCompletion(payload: any): void {
    this.completion[payload.index][payload.key] = payload.value;
  }

  @action.bound
  public validateStep(): void {
    return;
    // this.completion[this.activePageIndex]["status"] = "done";
  }

  @action.bound
  public setProp(payload: Ipayload): void {
    const key: keyof ReportStore = payload.key;
    if (this.hasOwnProperty(key)) {
      this[key] = payload.value;
    } else {
      const err = new Error();
      err.message = `Property ${key} does not exist on ReportStore`;
      throw err;
    }
  }
  @action.bound
  public getCompletName(): string {
    return `${this.genre} ${this.firstName} ${this.lastName.toUpperCase()}`;
  }
  @action.bound
  public co_getCompletName(): string {
    return `${this._genre} ${
      this.co_firstName
    } ${this.co_lastName.toUpperCase()}`;
  }

  @action.bound
  public saveInDatabase(): void {
    const doc: any = toJS(this);
    if (doc.reference === "" || doc.reference.length !== 7) {
      message.error("Référence Grdf invalide");
      return;
    } else {
      doc.id = doc.reference + "_" + doc.address;
      saveReport(doc, () => message.success("operation succedeed"));
    }
  }
}

const reportStore = new ReportStore();
export default reportStore;

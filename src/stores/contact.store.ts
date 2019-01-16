import { observable, action } from "mobx";
import { navItems } from "../data/nav-items.data";

interface Ipayload {
  key: keyof ContactStore;
  value: any;
}

export class ContactStore {
  @observable public genre: string = "";
  @observable public _genre: string = "";
  @observable public occupation: string = "";

  @observable public isMan: boolean = true;
  @observable public isWoman: boolean = false;
  @observable public lastName: string = "";
  @observable public firstName: string = "";
  @observable public address: string = "";
  @observable public city: string = "";
  @observable public phone: string = "";
  @observable public isOwner: boolean = true;
  @observable public isRenter: boolean = false;
  @observable public co_isMan: boolean = true;
  @observable public co_isWoman: boolean = false;
  @observable public co_lastName: string = "";
  @observable public co_firstName: string = "";
  @observable public co_address: string = "";
  @observable public co_city: string = "";
  @observable public co_phone: string = "";
  @observable public co_isOwner: boolean = false;

  // BRANCHEMENTS
  @observable public linking: string = "";

  @observable public individualPlug: boolean = false;
  @observable public collectivePlug: boolean = false;
  @observable public improductivePlug: boolean = false;
  @observable public nbOfYears: number = 0;

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
  @observable public compteurFlow: number = 0;
  @observable public compteurYear: number = 0;
  @observable public compteurNumber: string = "";
  @observable public compteurConserv: string = "";

  // ARRIVAL
  @observable public arrivalNature: string = "";
  @observable public arrivalDiameter: number = 0;

  // PENETRATION
  @observable public penetrationNature: string = "";
  @observable public penetrationDiameter: number = 0;
  @observable public penetrationConserved: string = "";
  @observable public _penetrationNature: string = "";
  @observable public _penetrationDiameter: number = 0;
  @observable public _penetrationLength: number = 0;

  // DETENTE
  @observable public detenteType: string = "";
  @observable public detentePose: string = "";

  // OBSERVATIONS
  @observable public obsTerass: string = "";
  @observable public obsSaignee: string = "";
  @observable public obsPerc: string = "";
  @observable public obsRemarks: string = "";

  // PHOTOS
  @observable public photoBeforeWork: string = "";
  @observable public photoAfterWork: string = "";

  // SIGNATURE
  @observable public signature: string = "";

  // COMPLETION
  @observable public completion: any[] = navItems.slice().map((item: any) => {
    item.errors = [];
    return item;
  });
  @observable public activePageIndex: number = 0;

  @action.bound
  public setCompletion(payload: any): void {
    this.completion[payload.index][payload.key] = payload.value;
  }

  @action.bound
  public validateStep(): void {
    this.completion[this.activePageIndex]["status"] = "done";
  }

  @action.bound
  public setProp(payload: Ipayload): void {
    const key: keyof ContactStore = payload.key;
    if (this.hasOwnProperty(key)) {
      this[key] = payload.value;
    } else {
      const err = new Error();
      err.message = `Property ${key} does not exist on ContactStore`;
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
}

const contactStore = new ContactStore();
export default contactStore;

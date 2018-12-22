import { observable, action } from "mobx";

interface Ipayload {
  key: keyof ContactStore;
  value: any;
}

export class ContactStore {
  @observable public title: boolean = true;
  @observable public lastName: string = "";
  @observable public firstName: string = "";
  @observable public address: string = "";
  @observable public city: string = "";
  @observable public phone: string = "";
  @observable public isOwner: boolean = false;
  @observable public co_title: boolean = true;
  @observable public co_lastName: string = "";
  @observable public co_firstName: string = "";
  @observable public co_address: string = "";
  @observable public co_city: string = "";
  @observable public co_phone: string = "";
  @observable public co_isOwner: boolean = false;
  @observable public isIndividualPlug: boolean = false;
  @observable public collectivePlug: boolean = false;
  @observable public improductivePlug: boolean = false;
  @observable public nbOfYears: number = 0;
  // COFFRET
  @observable public isEncastred: boolean = false;
  @observable public isBurried: boolean = false;
  @observable public hasMesh: boolean = false;
  @observable public hasBase: boolean = false;
  @observable public projection: boolean = false;
  @observable public isOutOfBound: boolean = false;
  @observable public sCarter: boolean = false;
  @observable public robFac: boolean = false;
  @observable public isCoffret: boolean = false;
  @observable public coffretType: string = "";
  @observable public poseBp: string = "";

  @observable public _isEncastred: boolean = false;
  @observable public _isBurried: boolean = false;
  @observable public _hasMesh: boolean = false;
  @observable public _hasBase: boolean = false;
  @observable public _projection: boolean = false;
  @observable public _isOutOfBound: boolean = false;
  @observable public _suppr: boolean = false;
  @observable public _reequip: boolean = false;
  @observable public _pose: boolean = false;
  @observable public _coffretType: string = "";
  @observable public _poseBp: string = "";

  // COMPTEUR
  @observable public compteurBrand: string = "";
  @observable public compteurType: string = "";
  @observable public compteurFlow: number = 0;
  @observable public compteurYear: number = 0;
  @observable public compteurNumber: string = "";
  @observable public compteurConserv: boolean = false;

  // ARRIVAL
  @observable public arrivalNature: string = "";
  @observable public arrivalDiameter: number = 0;

  // PENETRATION
  @observable public penetrationNature: string = "";
  @observable public penetrationDiameter: number = 0;
  @observable public penetrationConserved: boolean = false;
  @observable public _penetrationNature: string = "";
  @observable public _penetrationDiameter: number = 0;
  @observable public _penetrationLength: number = 0;

  // DETENTE
  @observable public detenteType: string = "";
  @observable public detenteExists: boolean = false;
  @observable public detentePose: boolean = false;

  // OBSERVATIONS
  @observable public obsTerass: string = "";
  @observable public obsSaignee: string = "";
  @observable public obsPerc: string = "";
  @observable public obsRemarks: string = "";

  // SIGNATURE
  @observable public signature: string = "";

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
    const prefix = !this.title ? "M." : "Mme";
    return `${prefix} ${this.firstName} ${this.lastName.toUpperCase()}`;
  }
  @action.bound
  public co_getCompletName(): string {
    const prefix = !this.co_title ? "M." : "Mme";
    return `${prefix} ${this.co_firstName} ${this.co_lastName.toUpperCase()}`;
  }
}

const contactStore = new ContactStore();
export default contactStore;

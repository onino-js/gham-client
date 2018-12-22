import { observable, action } from "mobx";

export class MapStore {
  @observable public map: any = null;
  @observable public mapImg: any = "";

  @action.bound
  public setMap(payload: L.Map): void {
    this.map = payload;
  }
  @action.bound
  public setMapImg(payload: any): void {
    this.mapImg = payload;
  }
}

const mapStore = new MapStore();
export default mapStore;

import { observable, action } from "mobx";
import { IAuthStore } from "../models/auth.store.model";

export class AuthStore implements IAuthStore {
  @observable public token: string = "";
  @observable public isLogged: boolean = false;
  @observable public email: string = "";
  @observable public password: string = "";

  @action
  public setIsLogged = (payload: boolean): void => {
    this.isLogged = payload;
  };
  @action
  public setToken = (token: string): void => {
    this.token = token;
  };
  @action
  public setEmail = (email: string): void => {
    this.email = email;
  };
  @action
  public setPassword = (password: string): void => {
    this.password = password;
  };
}

const authStore: IAuthStore = new AuthStore();
export default authStore;

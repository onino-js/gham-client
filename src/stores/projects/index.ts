import { message } from "antd";
import { _success } from "./../../css/_colors";
import {
  saveProject,
  getProjectsList,
  deleteProject,
  removeProject,
} from "./../../services/firebase.service";
import { observable, action, computed } from "mobx";
import { Project, IprojectJSON } from "./project";

interface IprojectMapJSON {
  [key: string]: IprojectJSON;
}

export class ProjectStore {
  @observable public projects: any = {};
  // @observable public selectedProjectIndex: number | null = null;
  @observable public newReference: string = "";
  @observable public loaded: boolean = false;

  constructor() {
    this.load();
  }

  @action.bound
  public setNewReference(payload: string) {
    this.newReference = payload;
  }

  @computed get isReferenceValid() {
    return !isNaN(this.newReference as any) && this.newReference.length === 7;
  }

  @computed get projectList() {
    const list = [];
    for (let key in this.projects!) {
      list.push(key);
    }
    return list;
  }

  // @action.bound
  // public selectProject(projectId: string) {
  //   this.selectedProjectIndex = this.projects.findIndex(
  //     (project: Project) => project.id === projectId,
  //   );
  // }

  @action.bound
  public load() {
    getProjectsList((items: any) => {
      for (let key in items) {
        this.projects[key as any] = new Project(items[key]);
      }
      this.loaded = true;
    });
  }

  // @action.bound
  // public setProjectList(obj: any) {
  //   const projects = [];
  //   for (let key in obj) {
  //     projects.push(obj[key]);
  //   }
  //   this.projects = projects;
  // }

  @action.bound
  public create(newProject?: IprojectJSON) {
    const opt: any = newProject || {
      reference: this.newReference,
    };
    const project: Project = new Project(opt);
    this.save(project.asJson);
    this.newReference = "";
  }

  public delete(projectId: string | null) {
    projectId &&
      // deleteProject(projectId, () => {
      //   message.success("Le projet à été supprimé");
      // });
      removeProject(projectId, () => {
        delete this.projects[projectId];
        message.success("Le projet à été supprimé");
      });
  }

  public update() {
    console.log("update from store");
    console.log("update from database");
  }

  public save(project: any): void {
    saveProject(project, console.log);
  }
}

const projectStore = new ProjectStore();
export default projectStore;

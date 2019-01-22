import { message } from "antd";
import {
  removeProject,
  saveProject,
  getProjectsList,
} from "./../../services/firebase.service";
import { observable, action, computed } from "mobx";
import { IprojectJSON } from "../../models/project.model";
import projectStore from "../projects";

export interface Iobject {
  id: string | null;
}

type IactivePage = "projects" | "objects" | "texts" | "contacts" | "images";

export class DashBoardStore {
  // PROJECTS
  @observable public selectedProjectId: string | null = null;
  @observable public showNewProject: boolean = false;
  @observable public showRemoveProject: boolean = false;
  @observable public activePage: IactivePage | null = null;
  @observable public projects: any = {};
  @observable public newReference: string = "";
  @observable public loaded: boolean = false;

  constructor() {
    this.loadProjects();
  }

  // PROJECTS SETTERS
  // PROJECTS REQUESTS

  @action.bound
  requestAddProject(): void {
    this.showNewProject = true;
  }

  @action.bound
  setActivePage(page: IactivePage): void {
    this.activePage = page;
  }

  @action.bound
  setSelectedProjectId(id: string | null): void {
    this.selectedProjectId = id;
    if (id !== null) {
      projectStore.setEditedProject(this.projects[id]);
    }
  }

  @action.bound
  requestRemoveProject(): void {
    this.showRemoveProject = true;
  }

  @action.bound
  public resetSelection(): void {
    this.selectedProjectId = null;
  }

  @action.bound
  public setNewReference(payload: string): void {
    this.newReference = payload;
  }

  @action.bound
  public closeNewReference(): void {
    this.showNewProject = false;
  }

  @action.bound
  public closeRemoveProject(): void {
    this.showRemoveProject = false;
  }

  @computed get isReferenceValid(): boolean {
    return !isNaN(this.newReference as any) && this.newReference.length === 7;
  }

  @action.bound
  public createProject() {
    const newProject: IprojectJSON = {
      reference: this.newReference,
      status: "new",
      refPrefix: "",
      reporterName: "",
      projectDate: new Date().toUTCString(),
      numberOfReports: 0,
      reportsIds: [],
    };
    this.save(newProject);
  }

  public deleteProject(projectId: string | null) {
    this.selectedProjectId = null;
    projectId &&
      removeProject(projectId, () => {
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

  @action.bound
  public loadProjects() {
    getProjectsList((projects: any) => {
      this.projects = projects;
      this.loaded = true;
    });
  }
}

const dashBoardStore = new DashBoardStore();
export default dashBoardStore;

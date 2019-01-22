import { message } from "antd";
import {
  removeProject,
  saveProject,
  getProjectsList,
} from "./../../services/firebase.service";
import { observable, action, computed, toJS } from "mobx";
import { IprojectJSON } from "../../models/project.model";
import { ReportStore } from "./../report/index";
import { createReport, getReportList } from "../../services/firebase.service";

export interface Iobject {
  id: string | null;
}

type IactivePage = "projects" | "objects" | "texts" | "contacts" | "images";

export class DomainStore {
  // PROJECTS
  @observable public selectedProjectId: string | null = null;
  @observable public showNewProject: boolean = false;
  @observable public showRemoveProject: boolean = false;
  @observable public activePage: IactivePage | null = null;
  @observable public projects: any = {};
  @observable public newReference: string = "";
  @observable public projectLoaded: boolean = false;
  @observable public editedProject: IprojectJSON | null = null;
  @observable public reportsLoaded: boolean = false;
  @observable public reports: any = null;
  @observable public selectedReportId: string | null = null;

  constructor() {
    this.loadProjects();
  }

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
      this.setEditedProject(this.projects[id]);
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
      this.projectLoaded = true;
    });
  }

  @action.bound
  public setEditedProject(project: IprojectJSON): void {
    this.editedProject = project;
  }

  @action.bound
  public setSelectedReportId(reportId: string): void {
    this.selectedReportId = reportId;
  }

  @action.bound
  public createReport(): void {
    const projectId = this.selectedProjectId;
    if (projectId !== null) {
      let newReport = new ReportStore();
      newReport = toJS(newReport);
      newReport.reference = this.projects[projectId].reference;
      newReport.creationDate = new Date().toUTCString();
      newReport.lastModifDate = new Date().toUTCString();
      newReport.status = "new";
      createReport(newReport, projectId, () =>
        message.success("Nouveau rapport créé"),
      );
    } else {
      message.error("Aucun projet selectionné");
    }
  }

  @action.bound
  public loadRequest() {
    if (this.selectedProjectId !== null) {
      this.loadReports();
    }
  }

  @action.bound
  public loadReports() {
    if (this.selectedProjectId !== null) {
      getReportList(this.selectedProjectId, (reports: any) => {
        this.reports = reports;
        this.reportsLoaded = true;
      });
    }
  }
}

const domainStore = new DomainStore();
export default domainStore;

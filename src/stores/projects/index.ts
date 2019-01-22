import { message } from "antd";
import { ReportStore } from "./../report/index";
import { observable, action, computed, toJS } from "mobx";
import { IprojectJSON } from "../../models/project.model";
import { createReport, getReportList } from "../../services/firebase.service";
import dashBoardStore from "../dashboard";

export class ProjectStore {
  @observable public editedProject: IprojectJSON | null = null;
  @observable public newReference: string = "";
  @observable public loaded: boolean = false;
  @observable public reports: any = null;
  @observable public selectedReportId: string | null = null;

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
    const projectId = dashBoardStore.selectedProjectId;
    if (projectId !== null) {
      let newReport = new ReportStore();
      newReport = toJS(newReport);
      newReport.reference = dashBoardStore.projects[projectId].reference;
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
    if (dashBoardStore.selectedProjectId !== null) {
      this.loadReports();
    }
  }

  @action.bound
  public loadReports() {
    if (dashBoardStore.selectedProjectId !== null) {
      getReportList(dashBoardStore.selectedProjectId, (reports: any) => {
        this.reports = reports;
        this.loaded = true;
      });
    }
  }
}

const projectStore = new ProjectStore();
export default projectStore;

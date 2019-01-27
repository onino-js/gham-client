import { message } from "antd";
import { deleteReport, updateReport } from "./../../services/firebase.service";
import { observable, action, computed, toJS } from "mobx";
import { IreportJSON } from "../../models/report.model";
import reportStore, { ReportStore } from "./../report/index";
import { createReport, getReportList } from "../../services/firebase.service";

export interface Iobject {
  id: string | null;
}

// type IactivePage = "reports" | "objects" | "texts" | "contacts" | "images";
type IactivePage = string;

export class DomainStore {
  // PROJECTS
  @observable public selectedReportId: string | null = null;
  @observable public showNewReport: boolean = false;
  @observable public showRemoveReport: boolean = false;
  @observable public activePage: IactivePage | null = null;
  @observable public newReference: string = "";
  @observable public reportLoaded: boolean = false;
  @observable public editedReport: IreportJSON | null = null;
  @observable public reportsLoaded: boolean = false;
  @observable public reports: IreportJSON[] | null = null;
  @observable public creationDate: Date = new Date();

  constructor() {
    this.loadReports();
  }

  @action.bound
  requestAddReport(): void {
    this.showNewReport = true;
  }

  @action.bound
  setActivePage(page: IactivePage): void {
    this.activePage = page;
  }

  @action.bound
  setSelectedReportId(id: string | null): void {
    this.selectedReportId = id;
    if (id !== null && this.reports !== null) {
      this.setEditedReport(this.reports[id as any]);
    }
  }

  @action.bound
  requestRemoveReport(): void {
    this.showRemoveReport = true;
  }

  @action.bound
  deleteReport(): void {
    if (this.selectedReportId) {
      deleteReport(this.selectedReportId, () => {
        message.success("Rapport supprimé");
      });
    } else {
      message.error("Pas de rapport sélectionné");
    }
  }

  @action.bound
  public resetSelection(): void {
    this.selectedReportId = null;
  }

  @action.bound
  public setNewReference(payload: string): void {
    this.newReference = payload;
  }

  @action.bound
  public closeNewReference(): void {
    this.showNewReport = false;
  }

  @action.bound
  public closeRemoveReport(): void {
    this.showRemoveReport = false;
  }

  @computed get isReferenceValid(): boolean {
    return !isNaN(this.newReference as any) && this.newReference.length === 7;
  }

  public updateReport() {
    if (this.selectedReportId && this.editedReport) {
      const report = toJS(reportStore);
      updateReport(this.selectedReportId!, report, () => {
        message.info("Rapport mis à jours");
      });
    }
  }

  @action.bound
  public setEditedReport(report: IreportJSON): void {
    this.editedReport = report;
  }

  @action.bound
  public createReport(): void {
    let newReport = new ReportStore();
    newReport = toJS(newReport);
    newReport.refPrefix = "";
    newReport.reference = this.newReference;
    newReport.creationDate = new Date().toUTCString();
    newReport.lastModifDate = new Date().toUTCString();
    newReport.status = "new";
    createReport(newReport, () => message.success("Nouveau rapport créé"));
  }

  @action.bound
  public cloneReport(): void {
    let newReport = new ReportStore();
    Object.assign(newReport, this.reports![this.selectedReportId as any]);
    createReport(newReport, () => message.success("Nouveau rapport créé"));
  }

  @action.bound
  public loadReports() {
    getReportList((reports: any) => {
      this.reports = reports;
      this.reportsLoaded = true;
    });
  }
}

const domainStore = new DomainStore();
export default domainStore;

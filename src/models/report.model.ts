export type IreportStatus = "new" | "warning" | "error" | "done";

export interface IreportData {
  city?: string;
  address?: string;
}

export interface IreportJSON extends IreportData {
  reference: string;
  refPrefix: string;
  reporterName: string;
  reportDate: string;
  status: IreportStatus;
  creationDate: string;
}

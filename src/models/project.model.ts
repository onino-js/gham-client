export interface IprojectJSON {
  reference: string;
  refPrefix: string;
  reporterName: string;
  projectDate: string;
  numberOfReports: number;
  reportsIds: string[];
  status: Istatus;
}

// export interface InewProjectJSON {
//   reference?: string;
//   refPrefix?: string;
//   reporterName?: string;
//   projectDate?: Date;
//   numberOfReports?: number;
//   reportsIds?: string[];
//   status?: Istatus;
// }

type Istatus = "new" | "warning" | "error" | "done";

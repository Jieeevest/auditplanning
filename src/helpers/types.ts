// types.ts

export interface ProjectOverview {
  id: string;
  name: string;
  status: string;
  year: number;
}

export interface Params {
  project_name: string;
  status_approver?: {
    pn: string;
  };
  status_pat?: {
    kode: string;
  };
  year: number;
  sort_by: "ASC" | "DESC";
  limit: number;
  page: number;
}

export interface UseProjectOverviewResponse {
  projectOverview: ProjectOverview[] | undefined;
  projectOverviewMutate: () => void;
  projectOverviewError: any;
}

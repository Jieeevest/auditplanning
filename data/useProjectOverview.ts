// useProjectOverview.ts
import useSWR from "swr";
import withTokenFetcher from "../fetchers/withTokenFetcher";
import {
  Params,
  ProjectOverview,
  UseProjectOverviewResponse,
} from "@/helpers/types";

const useProjectOverview = (params: Params): UseProjectOverviewResponse => {
  const {
    project_name,
    status_approver,
    status_pat,
    year,
    sort_by,
    page,
    limit,
  } = params;

  const statusApprover = status_approver?.pn || "";
  const statusPat = status_pat?.kode || "";

  const path = `${process.env.NEXT_PUBLIC_API_URL_PAT}/pat/auditors?page=${page}&limit=${limit}&project_name=${project_name}&status_approver=${statusApprover}&status_pat=${statusPat}&tahun=${year}&sortBy=name ${sort_by}`;

  // Use SWR with the correct fetcher type
  const { data, error, mutate } = useSWR<ProjectOverview[]>(
    path,
    withTokenFetcher
  );

  return {
    projectOverview: data,
    projectOverviewMutate: mutate,
    projectOverviewError: error,
  };
};

export default useProjectOverview;

"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useProjectOverview from "../../../data/useProjectOverview";
import {
  Params,
  ProjectOverview,
  UseProjectOverviewResponse,
} from "@/helpers/types";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Overview() {
  const router = useRouter();
  const [params, setParams] = useState<Params>({
    project_name: "",
    status_approver: undefined,
    status_pat: undefined,
    // year: new Date().getFullYear(),
    year: "",
    sort_by: "ASC",
    limit: 16,
    page: 1,
  });
  const {
    projectOverview,
    projectOverviewMutate,
    projectOverviewError,
  }: UseProjectOverviewResponse = useProjectOverview(params);

  const handleClick = (id: number) => {
    router.push(`/pat/${id}/overview`);
  };
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Breadcrumb className="hidden md:flex">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/dashboard">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/pat">P.A.T</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Pustaka Rencana Audit</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
          <div>
            <h5 className="text-2xl font-bold">Pustaka Rencana Audit</h5>
          </div>
          <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            {projectOverview?.data?.map((item) => (
              <Card
                key={item?.id}
                x-chunk={`dashboard-01-chunk-${item.id}`}
                className="shadow-md hover:bg-slate-100 hover:cursor-pointer"
                onClick={() => handleClick(item?.id)}
              >
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  {/* Add CardTitle and icons if needed */}
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {item?.pat_name + " " + item?.tahun}
                  </div>
                  <p className="text-xs text-muted-foreground mb-5">
                    [{item?.uka_name}] - Perencanaan Audit
                  </p>
                  <Progress
                    value={item?.status_pat == "On Progress" ? 50 : 100} // Adjust this if needed
                    aria-label={`${item.status_pat} progress`}
                    className="border-2 border-slate-600s"
                  />
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Periode</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>{item?.tahun}</TableCell>
                        <TableCell>{item?.status_pat}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

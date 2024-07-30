import { Activity, CreditCard, DollarSign, Users } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Overview() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Breadcrumb className="hidden md:flex">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="#">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="#">P.A.T</Link>
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
            <Card
              x-chunk="dashboard-01-chunk-0"
              className="min-h-[14rem] shadow-md hover:bg-slate-100 hover:cursor-pointer"
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                {/* <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" /> */}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">P.A.T RAO Medan 1</div>
                <p className="text-xs text-muted-foreground mb-5">
                  Perencanaan Audit RAO Medan
                </p>
                <Progress
                  value={50}
                  aria-label="25% increase"
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
                      <TableCell>2024</TableCell>
                      <TableCell>On Progress</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <Card
              x-chunk="dashboard-01-chunk-1"
              className="shadow-md hover:bg-slate-100 hover:cursor-pointer"
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                {/* <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" /> */}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">P.A.T RAO Semarang</div>
                <p className="text-xs text-muted-foreground mb-5">
                  Perencanaan Audit RAO Semarang
                </p>
                <Progress
                  value={100}
                  aria-label="25% increase"
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
                      <TableCell>2024</TableCell>
                      <TableCell>Final</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <Card
              x-chunk="dashboard-01-chunk-2"
              className="shadow-md hover:bg-slate-100 hover:cursor-pointer"
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                {/* <CardTitle className="text-sm font-medium">Sales</CardTitle> */}
                {/* <CreditCard className="h-4 w-4 text-muted-foreground" /> */}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">P.A.T RAO Bandung</div>
                <p className="text-xs text-muted-foreground mb-5">
                  Perencanaan Audit RAO Bandung
                </p>
                <Progress
                  value={25}
                  aria-label="25% increase"
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
                      <TableCell>2024</TableCell>
                      <TableCell>On Progress</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <Card
              x-chunk="dashboard-01-chunk-3"
              className="shadow-md hover:bg-slate-100 hover:cursor-pointer"
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                {/* <CardTitle className="text-sm font-medium">Jad</CardTitle> */}
                {/* <Activity className="h-4 w-4 text-muted-foreground" /> */}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">P.A.T RAO Jakarta</div>
                <p className="text-xs text-muted-foreground mb-5">
                  Perencanaan Audit RAO Jakarta
                </p>
                <Progress
                  value={75}
                  aria-label="25% increase"
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
                      <TableCell>2024</TableCell>
                      <TableCell>On Progress</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <Card
              x-chunk="dashboard-01-chunk-0"
              className="shadow-md hover:bg-slate-100 hover:cursor-pointer"
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                {/* <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" /> */}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">P.A.T RAO Jayapura</div>
                <p className="text-xs text-muted-foreground mb-5">
                  Perencanaan Audit RAO Jayapura
                </p>
                <Progress
                  value={100}
                  aria-label="25% increase"
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
                      <TableCell>2024</TableCell>
                      <TableCell>Final</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <Card
              x-chunk="dashboard-01-chunk-1"
              className="min-h-[14rem] shadow-md hover:bg-slate-100 hover:cursor-pointer"
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                {/* <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" /> */}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">P.A.T RAO Pontianak</div>
                <p className="text-xs text-muted-foreground mb-5">
                  Perencanaan Audit RAO Pontianak
                </p>
                <Progress
                  value={75}
                  aria-label="25% increase"
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
                      <TableCell>2024</TableCell>
                      <TableCell>On Progress</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <Card
              x-chunk="dashboard-01-chunk-2"
              className="shadow-md hover:bg-slate-100 hover:cursor-pointer"
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                {/* <CardTitle className="text-sm font-medium">Sales</CardTitle> */}
                {/* <CreditCard className="h-4 w-4 text-muted-foreground" /> */}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">P.A.T RAO Surabaya</div>
                <p className="text-xs text-muted-foreground mb-5">
                  Perencanaan Audit RAO Surabaya
                </p>
                <Progress
                  value={50}
                  aria-label="25% increase"
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
                      <TableCell>2024</TableCell>
                      <TableCell>On Progress</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <Card
              x-chunk="dashboard-01-chunk-3"
              className="shadow-md hover:bg-slate-100 hover:cursor-pointer"
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                {/* <CardTitle className="text-sm font-medium">Jad</CardTitle> */}
                {/* <Activity className="h-4 w-4 text-muted-foreground" /> */}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">P.A.T RAO Aceh</div>
                <p className="text-xs text-muted-foreground mb-5">
                  Perencanaan Audit RAO Aceh
                </p>
                <Progress
                  value={100}
                  aria-label="100% increase"
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
                      <TableCell>2024</TableCell>
                      <TableCell>Final</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}

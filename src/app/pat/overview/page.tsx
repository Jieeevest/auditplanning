import { Activity, CreditCard, DollarSign, Users } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

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
                <BreadcrumbPage>Proses Rencana Audit</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
          <div>
            <h5 className="text-2xl font-bold">Proses Rencana Audit</h5>
          </div>
          <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <Card
              x-chunk="dashboard-01-chunk-0"
              className="shadow-md hover:bg-slate-100 hover:cursor-pointer"
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                {/* <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" /> */}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Latar Belakang</div>
                <p className="text-xs text-muted-foreground">
                  Pemaparan latar belakang dan tujuan
                </p>
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
                <div className="text-2xl font-bold">Sumber Informasi</div>
                <p className="text-xs text-muted-foreground">
                  Pemaparan Sumber Informasi
                </p>
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
                <div className="text-2xl font-bold">Tim Audit</div>
                <p className="text-xs text-muted-foreground">
                  Pembuatan Tim Audit
                </p>
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
                <div className="text-2xl font-bold">Jadwal Audit</div>
                <p className="text-xs text-muted-foreground">
                  Pembuatan Jadwal Audit
                </p>
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
                <div className="text-2xl font-bold">Ringkasan Objek Audit</div>
                <p className="text-xs text-muted-foreground">
                  Melihat Ringkasan Objek Audit
                </p>
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
                <div className="text-2xl font-bold">Jadwal Kegiatan</div>
                <p className="text-xs text-muted-foreground">
                  Pembuatan Jadwal Kegiatan
                </p>
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
                <div className="text-2xl font-bold">Jadwal Lainnya</div>
                <p className="text-xs text-muted-foreground">
                  Pembuatan Jadwal Lainnya
                </p>
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
                <div className="text-2xl font-bold">Dokumen</div>
                <p className="text-xs text-muted-foreground">
                  Generate Dokumen dan Approval
                </p>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}

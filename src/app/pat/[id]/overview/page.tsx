"use client"; // Ensure this component runs on the client-side

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Overview() {
  const pathName = useParams();
  const router = useRouter();
  // Safely access the id from the query object
  const { id } = pathName;
  const basePath = `/pat/${id}/overview`;
  const cards = [
    {
      title: "Latar Belakang",
      description: "Pemaparan latar belakang dan tujuan",
      url: "/latar-belakang",
    },
    {
      title: "Sumber Informasi",
      description: "Pemaparan Sumber Informasi",
      url: "/sumber-informasi",
    },
    {
      title: "Tim Audit",
      description: "Pembuatan Tim Audit",
      url: "/tim-audit",
    },
    {
      title: "Jadwal Audit",
      description: "Pembuatan Jadwal Audit",
      url: "/jadwal-audit",
    },
    {
      title: "Ringkasan Objek Audit",
      description: "Melihat Ringkasan Objek Audit",
      url: "/ringkasan-objek",
    },
    {
      title: "Jadwal Kegiatan",
      description: "Pembuatan Jadwal Kegiatan",
      url: "/jadwal-kegiatan",
    },
    {
      title: "Jadwal Lainnya",
      description: "Pembuatan Jadwal Lainnya",
      url: "/jadwal-lainnya",
    },
    {
      title: "Dokumen",
      description: "Generate Dokumen dan Approval",
      url: "/dokumen",
    },
  ];

  const handleClick = (url: string | URL) => {
    router.push(basePath + url);
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
                  <Link href={`/pat/${id}/overview`}>
                    Pustaka Rencana Audit
                  </Link>
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
            {cards.map((card, index) => (
              <Card
                key={index}
                x-chunk={`dashboard-01-chunk-${index}`}
                className="shadow-md hover:bg-slate-100 hover:cursor-pointer"
                onClick={() => handleClick(card?.url)}
              >
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  {/* Add icons here if needed */}
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{card.title}</div>
                  <p className="text-xs text-muted-foreground">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

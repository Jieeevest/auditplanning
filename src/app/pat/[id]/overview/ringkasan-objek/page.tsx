import React from "react";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function RingkasanObjekAudit() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:px-12">
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
                <BreadcrumbPage>Ringkasan Objek Audit</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <main className="flex-1 p-4">
          <div>
            <h2 className="text-2xl font-bold mb-4">Ringkasan Objek Audit</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 border border-gray-200 rounded">
                <h3 className="font-bold mb-2">Unit Kerja Audit</h3>
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                        Tipe Uker
                      </th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                        Uker Eksisting
                      </th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                        Uker Audit
                      </th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                        Persentase
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-2">Regional Audit Office</td>
                      <td className="px-4 py-2">100</td>
                      <td className="px-4 py-2">100</td>
                      <td className="px-4 py-2">100%</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Branch Office</td>
                      <td className="px-4 py-2">100</td>
                      <td className="px-4 py-2">75</td>
                      <td className="px-4 py-2">25%</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Kantor Kas</td>
                      <td className="px-4 py-2">100</td>
                      <td className="px-4 py-2">50</td>
                      <td className="px-4 py-2">50%</td>
                    </tr>
                    {/* Add more rows as needed */}
                    <tr>
                      <td className="px-4 py-2 font-bold">TOTAL</td>
                      <td className="px-4 py-2 font-bold">900</td>
                      <td className="px-4 py-2 font-bold">550</td>
                      <td className="px-4 py-2 font-bold">60%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-white p-4 border border-gray-200 rounded">
                <h3 className="font-bold mb-2">E-Channel Audit</h3>
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                        Tipe Uker
                      </th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                        Uker Eksisting
                      </th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                        Uker Audit
                      </th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                        Persentase
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-2">Regional Audit Office</td>
                      <td className="px-4 py-2">100</td>
                      <td className="px-4 py-2">100</td>
                      <td className="px-4 py-2">100%</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Branch Office</td>
                      <td className="px-4 py-2">100</td>
                      <td className="px-4 py-2">75</td>
                      <td className="px-4 py-2">25%</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Kantor Kas</td>
                      <td className="px-4 py-2">100</td>
                      <td className="px-4 py-2">50</td>
                      <td className="px-4 py-2">50%</td>
                    </tr>
                    {/* Add more rows as needed */}
                    <tr>
                      <td className="px-4 py-2 font-bold">TOTAL</td>
                      <td className="px-4 py-2 font-bold">300</td>
                      <td className="px-4 py-2 font-bold">225</td>
                      <td className="px-4 py-2 font-bold">70%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

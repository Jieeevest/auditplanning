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

export default function DokumenPage() {
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
                <BreadcrumbPage>Dokumen Audit</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        {/* Main Content */}
        <main className="flex-1 p-4">
          <div>
            <h2 className="text-2xl font-bold mb-4">Dokumen Audit</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {/* Daftar Dokumen and Approval */}
              <div>
                <div className="bg-white p-4 border border-gray-200 rounded mb-2">
                  <h3 className="font-bold mb-2">Daftar Dokumen</h3>
                  <ul className="list-disc pl-5 mb-4">
                    <li>Latar Belakang</li>
                    <li>Tujuan</li>
                    <li>Sumber Informasi</li>
                    <li>Tim Audit</li>
                    <li>Jadwal Audit</li>
                    <li>Jadwal Kegiatan</li>
                    <li>Jadwal Lainnya</li>
                  </ul>
                </div>
                <div className="bg-white p-4 border border-gray-200 rounded">
                  <h3 className="font-bold mb-2">Approval</h3>
                  <div>
                    <p>Proposer</p>
                    <p className="font-bold">283318 - Justin Westervelt</p>
                    <p>Approver</p>
                    <p className="font-bold">254777 - Makenna George</p>
                    <p className="font-bold">260795 - Alfonso Baptista</p>
                    <p className="font-bold">575814 - Omar Philips</p>
                    <p>Signer</p>
                    <p className="font-bold">254777 - Makenna George</p>
                    <p className="font-bold">260795 - Alfonso Baptista</p>
                  </div>
                </div>
              </div>
              {/* Document Content */}
              <div className="col-span-4 bg-white p-4 border border-gray-200 rounded">
                <h3 className="font-bold mb-2">Hasil Dokumen</h3>
                <div className="h-96 overflow-auto p-2 border border-gray-200 rounded">
                  <p className="text-justify mb-4">
                    Latar belakang audit mengacu pada proses independen dan
                    sistematis untuk mengevaluasi keuangan, operasional, atau
                    informasi lainnya dari suatu entitas. Audit umumnya
                    dilakukan oleh pihak eksternal atau internal untuk
                    memastikan kepatuhan terhadap standar, kebijakan, atau
                    peraturan yang berlaku. Dengan menggunakan teknik seperti
                    pengumpulan bukti, pengujian, dan analisis, auditor
                    bertujuan untuk memberikan keyakinan bahwa laporan yang
                    diaudit dapat diandalkan dan akurat.
                  </p>
                  <p className="text-justify mb-4">
                    Sumber informasi audit berasal dari berbagai sumber yang
                    relevan dengan entitas yang sedang diaudit. Ini mencakup
                    dokumen keuangan seperti neraca, laporan laba rugi, dan arus
                    kas, serta rekam jejak transaksi dan kegiatan operasional.
                    Selain itu, auditor juga mengumpulkan informasi dari
                    wawancara dengan manajemen dan personel kunci, pemeriksaan
                    fisik aset, dan pemeriksaan dokumentasi internal. Data ini
                    membantu auditor dalam membentuk kesimpulan terkait
                    keandalan informasi yang diaudit serta untuk
                    mengidentifikasi potensi risiko atau penyimpangan yang
                    memerlukan perhatian khusus.
                  </p>
                  <p className="text-justify mb-4">
                    Tujuan dari audit adalah untuk menyediakan keyakinan yang
                    wajar kepada pemangku kepentingan bahwa laporan keuangan
                    atau informasi lain yang diaudit dapat diandalkan dan
                    akurat. Audit juga bertujuan untuk mengevaluasi kepatuhan
                    terhadap standar, kebijakan, atau peraturan yang berlaku,
                    serta mengidentifikasi potensi risiko atau penyimpangan yang
                    perlu diperbaiki. Dengan demikian, audit membantu
                    meningkatkan transparansi, akuntabilitas, dan kepercayaan
                    dalam pengelolaan entitas yang diaudit, baik itu perusahaan,
                    organisasi nirlaba, atau entitas lainnya.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

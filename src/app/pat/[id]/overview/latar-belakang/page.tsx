"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css"; // Import Quill styles

export default function Overview() {
  const [editorValue, setEditorValue] = useState("");

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
                <BreadcrumbPage>Sumber Informasi</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <main className="flex-1 p-5">
          <div>
            <h2 className="text-2xl font-bold mb-4">Sumber Informasi</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <div className="col-span-1">
                <div className="bg-white p-4 border border-gray-200 rounded mb-4">
                  <h3 className="font-bold mb-2">Kliping Gambar</h3>
                  <div className="flex flex-col gap-2">
                    <div className="h-24 bg-gray-100 border border-gray-200 rounded"></div>
                    <div className="h-24 bg-gray-100 border border-gray-200 rounded"></div>
                    <div className="h-24 bg-gray-100 border border-gray-200 rounded"></div>
                  </div>
                  <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
                    Tambah Gambar
                  </button>
                </div>
                <div className="bg-white p-4 border border-gray-200 rounded">
                  <h3 className="font-bold mb-2">Lampiran</h3>
                  <ul className="list-disc pl-5">
                    <li>
                      <a href="#" className="text-blue-500 hover:underline">
                        Dokumen Lampiran Pendukung Uraian.pdf
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-blue-500 hover:underline">
                        Berkas Kelengkapan.zip
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-blue-500 hover:underline">
                        Surat Perintah Kerja.docx
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-blue-500 hover:underline">
                        Surat Tugas Audit.pdf
                      </a>
                    </li>
                  </ul>
                  <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
                    Tambah Lampiran
                  </button>
                </div>
              </div>
              <div className="col-span-2">
                <ReactQuill
                  className="quill-editor"
                  value={editorValue}
                  onChange={setEditorValue}
                />
                <div className="flex justify-end mt-12">
                  <button className="px-4 py-2 bg-green-600 text-white rounded">
                    Simpan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

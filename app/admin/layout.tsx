"use client";
 

import Sidebar from "../componentsAdmin/sidebar";
import Header from "../componentsAdmin/header";
import Breadcrumbs from "../componentsAdmin/breadcrumbs";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Header />
        <div className="p-6">
          <Breadcrumbs />
          <div className="mt-4">{children}</div>
        </div>
      </div>
    </div>
  );
}

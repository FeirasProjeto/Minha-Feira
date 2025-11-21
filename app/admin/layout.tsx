"use client";
import { Menu } from 'lucide-react'; // Importe o ícone Menu

import Sidebar from "../componentsAdmin/sidebar";
import Header from "../componentsAdmin/header";
import Breadcrumbs from "../componentsAdmin/breadcrumbs";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/app/context/user";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  
    const { Usuario } = useUserStore();
  
    const router = useRouter();

    if (Usuario.admin === false || Object.keys(Usuario).length === 0) {
      router.push("/login");
      return null
    }
  
    useEffect(() => {
      if (Usuario.admin === false || Object.keys(Usuario).length === 0) {
        router.push("/login");
        return null
      }
    });

  // Função para fechar a sidebar
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="w-full flex min-h-screen bg-gray-900 text-white">
      
      <div 
        className={`fixed inset-y-0 left-0 z-50 transform 
                  ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
                  transition-transform duration-300 ease-in-out
                  lg:relative lg:translate-x-0 lg:flex lg:flex-shrink-0`}
      >
        <Sidebar closeSidebar={closeSidebar} /> 
      </div>

      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black opacity-50 lg:hidden"
          onClick={closeSidebar}
          aria-hidden="true"
        />
      )}

      <div className="flex flex-col flex-1"> 
        
        <Header>
          <button
            className="p-2 text-white lg:hidden"
            onClick={() => setIsSidebarOpen(true)} 
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </Header>
        <main>{children}</main>
      </div>
    </div>
  );
}
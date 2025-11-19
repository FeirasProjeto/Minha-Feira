"use client";
import { useState } from 'react';
import { Menu } from 'lucide-react'; // Importe o ícone Menu

import Sidebar from "../componentsAdmin/sidebar";
import Header from "../componentsAdmin/header";
import Breadcrumbs from "../componentsAdmin/breadcrumbs";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Função para fechar a sidebar (útil para o overlay ou links)
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      
      {/* 1. SIDEBAR: Configuração Off-Canvas */}
      <div 
        className={`fixed inset-y-0 left-0 z-50 transform 
                   ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
                   transition-transform duration-300 ease-in-out
                   lg:relative lg:translate-x-0 lg:flex lg:flex-shrink-0`}
      >
        {/* Passamos closeSidebar para que os links dentro da Sidebar possam fechar o menu */}
        <Sidebar closeSidebar={closeSidebar} /> 
      </div>

      {/* 2. OVERLAY (Oculta a Sidebar ao clicar fora) */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black opacity-50 lg:hidden"
          onClick={closeSidebar}
          aria-hidden="true"
        />
      )}

      {/* 3. CONTEÚDO PRINCIPAL E HEADER */}
      <div className="flex flex-col flex-1 lg:ml-64"> 
        
        {/* === HEADER: Inclui o botão para abrir === */}
        <Header>
          {/* 🛑 AQUI ESTÁ O BOTÃO QUE ABRE A SIDEBAR 🛑 */}
          <button
            className="p-2 text-white lg:hidden"
            onClick={() => setIsSidebarOpen(true)} // Note que agora é setIsSidebarOpen(true)
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </Header>
        {/* ... Resto do Conteúdo ... */}
      </div>
    </div>
  );
}
"use client";

import Link from "next/link";
import { useState } from "react";

export default function FeirasPage() {
  const [filtroStatus, setFiltroStatus] = useState<string>("Todos");
  const [busca, setBusca] = useState<string>("");

  //integrar aki dps
  const feiras = [
    { 
      id: 1, 
      nome: "Feira do Centro", 
      imagem: "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
      status: "Ativa",
    },
    { 
      id: 2, 
      nome: "Feira do Bairro Azul", 
      imagem: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
      status: "Ativa",
    },
    { 
      id: 3, 
      nome: "Feira Orgânica", 
      imagem: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
      status: "Planejada",
    },
    { 
      id: 4, 
      nome: "Feira Noturna", 
      imagem: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
      status: "Cancelada",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Ativa":
        return "bg-green-100 text-green-800 border border-green-200 dark:bg-green-900 dark:text-green-300 dark:border-green-800";
      case "Planejada":
        return "bg-blue-100 text-blue-800 border border-blue-200 dark:bg-blue-900 dark:text-blue-300 dark:border-blue-800";
      case "Cancelada":
        return "bg-red-100 text-red-800 border border-red-200 dark:bg-red-900 dark:text-red-300 dark:border-red-800";
      default:
        return "bg-gray-100 text-gray-800 border border-gray-200 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-800";
    }
  };

  const feirasFiltradas = feiras.filter(feira => {
    const matchBusca = feira.nome.toLowerCase().includes(busca.toLowerCase());
    const matchStatus = filtroStatus === "Todos" || feira.status === filtroStatus;
    return matchBusca && matchStatus;
  });

  const statusOptions = ["Todos", "Ativa", "Planejada", "Cancelada"];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Feiras</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Gerencie suas feiras de forma simples e eficiente
            </p>
          </div>
          <Link
            href="/admin/feiras/criar"
            className="inline-flex items-center justify-center px-4 py-2.5 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg text-sm transition-all duration-200 shadow-sm hover:shadow-md w-full sm:w-auto"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Nova Feira
          </Link>
        </div>

        {/* Filtros */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 shadow-sm">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Busca */}
            <div className="flex-1">
              <label htmlFor="busca" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Buscar feira
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  id="busca"
                  placeholder="Digite o nome da feira..."
                  value={busca}
                  onChange={(e) => setBusca(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                />
              </div>
            </div>

            {/* Filtro por Status */}
            <div className="sm:w-48">
              <label htmlFor="status" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Status
              </label>
              <select
                id="status"
                value={filtroStatus}
                onChange={(e) => setFiltroStatus(e.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
              >
                {statusOptions.map(status => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Contador de resultados */}
          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {feirasFiltradas.length} de {feiras.length} feiras
            </span>
            {(busca || filtroStatus !== "Todos") && (
              <button
                onClick={() => {
                  setBusca("");
                  setFiltroStatus("Todos");
                }}
                className="text-sm text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 font-medium"
              >
                Limpar filtros
              </button>
            )}
          </div>
        </div>

        {/* Lista de Feiras */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
          {/* Header da tabela */}
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Lista de Feiras
              </h2>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {feirasFiltradas.length} itens
              </span>
            </div>
          </div>

          {/* Lista */}
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {feirasFiltradas.length === 0 ? (
              <div className="px-6 py-12 text-center">
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">Nenhuma feira encontrada</h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Tente ajustar seus filtros de busca.
                </p>
              </div>
            ) : (
              feirasFiltradas.map((feira) => (
                <div key={feira.id} className="px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors duration-150">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      {/* Imagem */}
                      <div className="flex-shrink-0">
                        <img
                          className="w-12 h-12 rounded-lg object-cover border border-gray-200 dark:border-gray-700"
                          src={feira.imagem}
                          alt={feira.nome}
                        />
                      </div>
                      
                      {/* Informações */}
                      <div className="min-w-0">
                        <p className="text-base font-medium text-gray-900 dark:text-white truncate">
                          {feira.nome}
                        </p>
                        <div className="mt-1">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(feira.status)}`}>
                            {feira.status}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Ações */}
                    <div className="flex items-center space-x-2">
                      <Link
                        href={`/admin/feiras/editar/${feira.id}`}
                        className="inline-flex items-center p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-200"
                        title="Editar feira"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
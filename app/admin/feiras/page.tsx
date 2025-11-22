"use client";

import { useState } from "react";
import { ListaFeiras } from "@/app/componentsAdmin/listaFeiras";
import { useEffect } from "react";


export default function FeirasPage() {
  const [feiras, setFeiras] = useState<TypeFeira[]>([]);

  //integrar aki dps
  async function fetchFeirasData() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/dashboard/feiras`);
    const data = await response.json();
    setFeiras(data);
  }

  useEffect(() => {
      fetchFeirasData();
    }, []);


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
                {feiras.length} itens
              </span>
            </div>
          </div>

          {/* Lista */}
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {feiras.map((feira) => (
                <ListaFeiras key={feira.id} data={feira} refresh={fetchFeirasData} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
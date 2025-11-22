"use client";

import Widget from "../../componentsAdmin/widgets";
import { Chart } from "@/app/componentsAdmin/graficos";
import { Chart2 } from "@/app/componentsAdmin/graficos";
import { Chart3 } from "@/app/componentsAdmin/graficos";
import { Chart4 } from "@/app/componentsAdmin/graficos";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/app/context/user";

export default function DashboardPage() {
  const [stats, setStats] = useState({
    usersAtivos: 0,
    feirasAtivas: 0,
    avaliacoes: 0,
    feirasNovas: 0,
    tagsPopulares: [],
    categoriasPopulares: []
  });
  const [loading, setLoading] = useState(true);
  //integrar ali em cima

  const { Usuario } = useUserStore();
  const router = useRouter(); 

  useEffect(() => {
    async function fetchDashboardData() {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/dashboard`);
      const data = await response.json();
      setStats(data);
      setLoading(false);
      console.log(stats)
    }
    fetchDashboardData();
  }, []);

  useEffect( () => {
    console.log(stats.tagsPopulares)
  }, [stats])


  return (
    <div className="flex flex-col gap-6 p-4 sm:p-6 overflow-x-hidden w-full"> {/* Corrigido */}
      <h1 className="text-2xl font-semibold">Dashboard Minha Feira</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        <Widget title="Usuários Ativos" value={loading ? "Carregando..." : stats.usersAtivos.toString()} />
        <Widget title="Feiras Ativas" value={loading ? "Carregando..." : stats.feirasAtivas.toString()} />
        <Widget title="Avaliações" value={loading ? "Carregando..." : stats.avaliacoes.toString()} />
        <Widget title="Novas Feiras (30d)" value={loading ? "Carregando..." : stats.feirasNovas.toString()} />
      </div>

      {/* pizaaaa */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        <div className="bg-gray-800 rounded-xl p-4 border border-gray-700 h-72 flex flex-col overflow-hidden"> {/* Corrigido */}
          <p className="text-gray-300 mb-2">Distribuição por Categoria</p>
          <div className="flex-1 min-h-0 relative">
            <Chart data={stats.categoriasPopulares} key={stats.categoriasPopulares} />
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-4 border border-gray-700 h-72 flex flex-col overflow-hidden"> {/* Corrigido */}
          <p className="text-gray-300 mb-2">Tags Mais Populares</p>
          <div className="flex-1 min-h-0 relative">
            <Chart2 data={stats.tagsPopulares} key={stats.tagsPopulares} />
          </div>
        </div>
      </div>
    </div>
  );
}
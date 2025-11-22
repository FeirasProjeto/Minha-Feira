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
  const [feiras, setFeiras] = useState<TypeFeira[]>([]);
  const [stats, setStats] = useState({
    usuariosAtivos: 124,
    pedidos: 87,
    feirasAtivas: 14,
    cancelamentos: 8,
    feirantesCadastrados: 45,
    avaliacoes: 156,
    produtosCadastrados: 320,
    feirasAdicionadas: 23
  });
  //integrar ali em cima

  const { Usuario } = useUserStore();
  const router = useRouter(); 

  useEffect(() => {
    // async function fetchDashboardData() {
    //   const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/dashboard/stats`);
    //   const data = await response.json();
    //   setStats(data);
    // }
    // fetchDashboardData();
  }, []);

  return (
    <div className="flex flex-col gap-6 p-4 sm:p-6 overflow-x-hidden w-full"> {/* Corrigido */}
      <h1 className="text-2xl font-semibold">Dashboard Minha Feira</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        <Widget title="Usuários Ativos" value={stats.usuariosAtivos.toString()} />
        <Widget title="Feirantes Cadastrados" value={stats.feirantesCadastrados.toString()} />
        <Widget title="Feiras Ativas" value={stats.feirasAtivas.toString()} />
        <Widget title="Avaliações" value={stats.avaliacoes.toString()} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        <Widget title="Produtos Cadastrados" value={stats.produtosCadastrados.toString()} />
        <Widget title="Novas Feiras (30d)" value={stats.feirasAdicionadas.toString()} />
        <Widget title="Pedidos" value={stats.pedidos.toString()} />
        <Widget title="Cancelamentos" value={stats.cancelamentos.toString()} />
      </div>

      //pizaaaa
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        <div className="bg-gray-800 rounded-xl p-4 border border-gray-700 h-72 flex flex-col overflow-hidden"> {/* Corrigido */}
          <p className="text-gray-300 mb-2">Distribuição por Categoria</p>
          <div className="flex-1 min-h-0 relative">
            <Chart />
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-4 border border-gray-700 h-72 flex flex-col overflow-hidden"> {/* Corrigido */}
          <p className="text-gray-300 mb-2">Tags Mais Populares</p>
          <div className="flex-1 min-h-0 relative">
            <Chart2 />
          </div>
        </div>
      </div>

      //grafico de users
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        <div className="bg-gray-800 rounded-xl p-4 border border-gray-700 h-72 flex flex-col overflow-hidden"> {/* Corrigido */}
          <p className="text-gray-300 mb-2">Crescimento de Usuários (30 dias)</p>
          <div className="flex-1 min-h-0 relative">
            <Chart3 />
          </div>
        </div>

        //pode integrar o mesmo do de pizza aki ou sla excloi
        <div className="bg-gray-800 rounded-xl p-4 border border-gray-700 h-72 flex flex-col overflow-hidden"> {/* Corrigido */}
          <p className="text-gray-300 mb-2">Tipos de Feiras</p>
          <div className="flex-1 min-h-0 relative">
            <Chart4 />
          </div>
        </div>
      </div>
    </div>
  );
}
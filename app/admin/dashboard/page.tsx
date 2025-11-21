"use client";

import Widget from "../../componentsAdmin/widgets";
import Chart from "../../componentsAdmin/graficos";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/app/context/user";


export default function DashboardPage() {

  const [feiras, setFeiras] = useState<TypeFeira[]>([]);

  const { Usuario } = useUserStore();

  const router = useRouter();

  useEffect(() => {
    async function fetchFeiras() {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/feira?limit=1000`);
      const feiras = await response.json();
      setFeiras(feiras);
    }

    fetchFeiras();

    console.log(feiras)
  }, []);

useEffect(() => {
  console.log("Feiras atualizadas:", feiras);
}, [feiras]);


  return (
    <div className="flex flex-col gap-6 p-4 sm:p-6">

      <h1 className="text-2xl font-semibold">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Widget title="Usuários" value="124" />
        <Widget title="Pedidos" value="87" />
        <Widget title="Feiras Ativas" value="14" />
        <Widget title="Cancelamentos" value="8" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-gray-800 rounded-xl p-4 border border-gray-700 h-72">
          <p className="text-gray-300 mb-3">Gráfico 1</p>
        </div>

        <div className="bg-gray-800 rounded-xl p-4 border border-gray-700 h-72">
          <p className="text-gray-300 mb-3">Gráfico 2</p>
        </div>
      </div>

    </div>
  );
}


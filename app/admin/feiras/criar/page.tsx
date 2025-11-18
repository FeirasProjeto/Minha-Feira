"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CriarFeiraPage() {
  const [nome, setNome] = useState("");
  const [data, setData] = useState("");
  const router = useRouter();

  function handleSalvar(e: any) {
    e.preventDefault();
    console.log({ nome, data });
    router.push("/admin/feiras");
  }

  return (
    <form onSubmit={handleSalvar} className="space-y-4 max-w-lg">
      <h2 className="text-xl font-bold">Nova Feira</h2>

      <div>
        <label className="block text-sm mb-1">Nome</label>
        <input
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Data</label>
        <input
          type="date"
          value={data}
          onChange={(e) => setData(e.target.value)}
          className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
        />
      </div>

      <button className="bg-green-600 px-4 py-2 rounded-lg">Salvar</button>
    </form>
  );
}

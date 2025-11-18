"use client";

import Link from "next/link";

export default function FeirasPage() {
  const feiras = [
    { id: 1, nome: "Feira do Centro", data: "15/02/2025" },
    { id: 2, nome: "Feira do Bairro Azul", data: "20/02/2025" },
  ];

  return (
    <div>
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-bold">Feiras</h2>
        <Link
          href="/admin/feiras/criar"
          className="bg-green-600 px-4 py-2 rounded-lg"
        >
          Nova Feira
        </Link>
      </div>

      <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
        <table className="w-full text-left">
          <thead className="text-gray-400 text-sm border-b border-gray-700">
            <tr>
              <th className="py-2">Nome</th>
              <th>Data</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            {feiras.map(f => (
              <tr key={f.id} className="border-b border-gray-700">
                <td className="py-3">{f.nome}</td>
                <td>{f.data}</td>
                <td className="flex gap-3">
                  <Link href={`/admin/feiras/editar/${f.id}`} className="text-blue-400">
                    Editar
                  </Link>
                  <button className="text-red-400">Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

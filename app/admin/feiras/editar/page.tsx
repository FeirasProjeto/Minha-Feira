"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { TextField, CircularProgress } from "@mui/material";

export default function EditarFeiraPage() {
  const { id } = useParams();
  const router = useRouter();

  // Estados
  const [nome, setNome] = useState("");
  const [data, setData] = useState("");
  const [carregando, setCarregando] = useState(true);
  const [salvando, setSalvando] = useState(false);
  const [erro, setErro] = useState("");

  // Buscar dados da feira
  useEffect(() => {
    async function fetchFeira() {
      try {
        const res = await fetch(`/api/feiras/${id}`);
        if (!res.ok) throw new Error("Erro ao carregar dados");

        const feira = await res.json();

        setNome(feira.nome);
        setData(feira.data);
      } catch (err: any) {
        setErro(err.message);
      } finally {
        setCarregando(false);
      }
    }

   fetchFeira();
  }, [id]);

  // Salvar alterações
  async function handleSalvar(e: any) {
    e.preventDefault();
    setSalvando(true);
    setErro("");

    try {
      const res = await fetch(`/api/feiras/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, data }),
      });

      if (!res.ok) throw new Error("Erro ao salvar alterações");

      router.push("/admin/feiras");
    } catch (err: any) {
      setErro(err.message);
    } finally {
      setSalvando(false);
    }
  }

  // LOADING inicial
  if (carregando) {
    return (
      <div className="flex items-center justify-center h-64">
        <CircularProgress />
      </div>
    );
  }

  // ERRO de carregamento
  if (erro && !salvando) {
    return (
      <p className="text-red-400 bg-red-900/20 p-4 rounded-lg border border-red-700">
        {erro}
      </p>
    );
  }

  return (
    <form onSubmit={handleSalvar} className="space-y-6 max-w-xl">
      <h2 className="text-2xl font-bold">Editar Feira</h2>

      <div className="space-y-2">
        <label className="text-sm text-gray-300">Nome da Feira</label>
        <TextField
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome da feira"
          fullWidth
          required
          sx={{
            backgroundColor: "rgba(255,255,255,0.05)",
            borderRadius: "8px",
            "& .MuiInputBase-input": { color: "white" },
            "& fieldset": { borderColor: "rgba(255,255,255,0.2)" },
          }}
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm text-gray-300">Data</label>
        <TextField
          type="date"
          value={data}
          onChange={(e) => setData(e.target.value)}
          fullWidth
          required
          sx={{
            backgroundColor: "rgba(255,255,255,0.05)",
            borderRadius: "8px",
            "& .MuiInputBase-input": { color: "white" },
            "& fieldset": { borderColor: "rgba(255,255,255,0.2)" },
          }}
        />
      </div>

      {/* Botão de salvar */}
      <button
        type="submit"
        disabled={salvando}
        className="bg-green-600 px-6 py-3 rounded-lg text-white font-semibold
                   hover:bg-green-700 transition-all flex items-center gap-3
                   disabled:bg-gray-600 disabled:cursor-not-allowed"
      >
        {salvando ? (
          <>
            <CircularProgress size={20} color="inherit" />
            Salvando...
          </>
        ) : (
          "Salvar alterações"
        )}
      </button>
    </form>
  );
}

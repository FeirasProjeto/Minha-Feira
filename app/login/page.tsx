"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { set, useForm } from "react-hook-form";
import { useUserStore } from "../context/user";
import { use } from "react";
import { TextField, IconButton, Alert } from "@mui/material";
import { Eye, EyeClosed, Shield, Monitor, Lock, Activity } from "lucide-react";

type inputs = {
  email: string;
  senha: string;
};

export default function AdminLoginPage() {
  const { register, handleSubmit } = useForm<inputs>();
  const router = useRouter();
  const { logaUsuario } = useUserStore();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  async function verificaLogin(data: inputs) {
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          senha: data.senha,
        }),
      });

      if (res.status === 200) {
        const dados = await res.json();
        logaUsuario(dados);

        if(dados.admin === true) {
          router.push("/admin/dashboard");
        }

        if(dados.admin === false) {
          setError("Acesso negado");
        }
      }

      if (res.status !== 200) {
        setError("Erro ao fazer login");
        return;
      }

    } catch (err: any) {
      setError(err.message || "Erro de conexão");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center p-6">
        <div className="bg-gray-800/80 backdrop-blur-md border border-gray-700 rounded-2xl p-8 w-full max-w-md shadow-2xl">
          <div className="flex flex-col items-center mb-8">
            <div className="bg-gradient-to-r from-[#8031C5] to-[#1AA96E] rounded-2xl p-4 mb-4 shadow-lg">
              <Monitor className="text-white" size={48} />
            </div>
            <h2 className="text-2xl font-bold text-white text-center">
              Administrador
            </h2>
            <p className="text-gray-400 text-sm text-center mt-2">
              Acesse o painel de controle do sistema
            </p>
          </div>

          <form onSubmit={handleSubmit(verificaLogin)} className="space-y-6">
            {error && (
              <Alert severity="error" className="bg-[#DF2A35]/20 text-white border border-[#DF2A35]/30">
                <span className="flex items-center gap-2">
                  <Shield size={16} />
                  {error}
                </span>
              </Alert>
            )}

            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                <Monitor size={16} className="text-[#1AA96E]" />
                Email de Acesso
              </label>
              <TextField
                type="email"
                {...register("email")}
                placeholder="seguranca@sistema.com"
                required
                fullWidth
                variant="outlined"
                sx={{
                  "& fieldset": {
                    borderRadius: "8px",
                    borderColor: "rgba(255,255,255,0.1)",
                    borderWidth: "2px",
                  },
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "rgba(255,255,255,0.05)",
                    "&:hover fieldset": {
                      borderColor: "rgba(255,255,255,0.2)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#8031C5",
                    },
                  },
                  "& .MuiInputBase-input": {
                    color: "white",
                    "&::placeholder": {
                      color: "rgba(255,255,255,0.4)",
                    },
                  },
                }}
              />
            </div>

            {/* Senha */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                <Lock size={16} className="text-[#1AA96E]" />
                Senha
              </label>
              <div className="relative">
                <TextField
                  type={showPassword ? "text" : "password"}
                  {...register("senha")}
                  placeholder="••••••••"
                  required
                  fullWidth
                  variant="outlined"
                  sx={{
                    "& fieldset": {
                      borderRadius: "8px",
                      borderColor: "rgba(255,255,255,0.1)",
                      borderWidth: "2px",
                    },
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "rgba(255,255,255,0.05)",
                      "&:hover fieldset": {
                        borderColor: "rgba(255,255,255,0.2)",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#8031C5",
                      },
                    },
                    "& .MuiInputBase-input": {
                      color: "white",
                      "&::placeholder": {
                        color: "rgba(255,255,255,0.4)",
                      },
                    },
                  }}
                />
                <IconButton
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#F4881F]"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <Eye size={20} /> : <EyeClosed size={20} />}
                </IconButton>
              </div>
            </div>

            {/* Botão de Login */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-[#8031C5] to-[#1AA96E] hover:from-[#7029B0] hover:to-[#15955E] disabled:from-gray-600 disabled:to-gray-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-200 shadow-lg transform hover:scale-[1.02] disabled:scale-100 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Autenticando...
                </div>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <Shield size={20} />
                  Acessar Sistema
                </span>
              )}
            </button>
          </form>

          {/* Link de Voltar */}
          <div className="mt-6 text-center">
            <button
              onClick={() => router.push("/")}
              className="text-gray-400 hover:text-[#F4881F] text-sm transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <span>←</span>
              Voltar para o Aplicativo
            </button>
          </div>

          {/* Aviso de Segurança */}
          <div className="mt-8 p-4 bg-[#8031C5]/10 border border-[#8031C5]/20 rounded-lg">
            <p className="text-gray-300 text-xs text-center flex items-center justify-center gap-2">
              <Shield size={14} className="text-[#DF2A35]" />
              Acesso restrito à equipe de segurança autorizada. 
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 p-4 text-center">
        <p className="text-gray-500 text-sm">
           Minha Feira © 2025. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}

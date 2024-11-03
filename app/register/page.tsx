"use client";

import { TextField, IconButton } from "@mui/material";
import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";
import Header from "../../components/header";
import Link from "next/link";

export default function RegisterPage() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, confirmPassword }),
      });
      const data = await res.json();
      if (data.error) {
        setError(data.error);
      } else {
        // register successful, redirect to homepage
        window.location.href = "/";
      }
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  const [showPassword, setShowPassword] = useState({
    regular: false,
    confirmPassword: false,
  });

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-[#C4C4C410] to-[#8c8c8c10]">
      <img
        src="./bolinhas/01.svg"
        className="fixed bottom-0 left-0 grayscale"
      />
      <img
        src="./bolinhas/02.svg"
        className="fixed bottom-0 right-0 grayscale"
      />
      <Header />
      <div className=" bg-[#ECECEC] border border-gradient-to-r from-[#C4C4C410] to-[#8c8c8c10] my-auto mx-auto w-[500px] rounded-3xl p-10 gap-16 flex flex-col">
        <div className="w-full flex justify-center bg-destaque-forte rounded-xl h-16 items-center">
          <img src="./logo.svg" className="h-12" />
        </div>
        <form
          onSubmit={handleRegister}
          className="flex flex-col gap-6 max-w-64 mx-auto"
        >
          <h1 className="text-2xl font-bold w-full text-center">Cadastro</h1>
          <div className="flex flex-col gap-2">
            <TextField
              label="Nome"
              variant="outlined"
              fullWidth
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextField
              label="Senha"
              variant="outlined"
              fullWidth
              type={showPassword.regular ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              InputProps={{
                endAdornment: (
                  <IconButton
                    onClick={() =>
                      setShowPassword((prev) => ({
                        ...prev,
                        regular: !prev.regular,
                      }))
                    }
                  >
                    {showPassword.regular ? <Eye /> : <EyeClosed />}
                  </IconButton>
                ),
              }}
            />
            <TextField
              label="Confirmar Senha"
              variant="outlined"
              fullWidth
              type={showPassword.confirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              InputProps={{
                endAdornment: (
                  <IconButton
                    onClick={() =>
                      setShowPassword({
                        ...showPassword,
                        confirmPassword: !showPassword.confirmPassword,
                      })
                    }
                  >
                    {showPassword.confirmPassword ? <Eye /> : <EyeClosed />}
                  </IconButton>
                ),
              }}
            />
          </div>
          <p className="text-center text-red-500">{error}</p>
          <button
            className="bg-destaque-fraca text-black font-bold p-2 rounded-md shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"
            disabled={loading}
            type="submit"
          >
            {loading ? "Carregando..." : "Cadastrar"}
          </button>
        </form>
        <Link
          href="/login"
          className="underline hover:no-underline hover:cursor-pointer select-none text-[10px] w-fit z-50"
        >
          Já possui uma conta? <b>Faça login</b>
        </Link>
      </div>
    </div>
  );
}

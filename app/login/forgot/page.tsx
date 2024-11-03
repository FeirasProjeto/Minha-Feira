"use client";
import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { Mail } from "lucide-react";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.error) {
        setError(data.error);
      }
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

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
      <div className="bg-[#ECECEC] border border-gradient-to-r from-[#C4C4C410] to-[#8c8c8c10] my-auto mx-auto w-[500px] rounded-3xl p-10 gap-16 flex flex-col">
        <h1 className="text-2xl font-bold w-full text-center">
          Esqueceu sua senha?
        </h1>
        <p className="text-center">
          Insira o seu e-mail abaixo para receber um link para redefinir sua
          senha.
        </p>
        <form onSubmit={handleSubmit}>
          <TextField
            label="E-mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              startAdornment: (
                <Mail className="h-5 w-5 text-gray-600" aria-hidden="true" />
              ),
            }}
          />
          {error && <p className="text-red-500">{error}</p>}
          <Button
            type="submit"
            variant="contained"
            disabled={loading}
            className="mt-5 w-full"
          >
            Enviar
          </Button>
        </form>
        <Link className="text-center text-sm" href="/login">
          Lembrei da minha senha! Voltar para a página de login.
        </Link>
      </div>
    </div>
  );
}

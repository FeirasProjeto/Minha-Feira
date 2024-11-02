"use client";

import { useState } from "react";
import Header from "../../components/header";
import { IconButton, TextField } from "@mui/material";
import { Eye, EyeClosed } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (data.error) {
        setError(data.error);
      } else {
        // login successful, redirect to homepage
        window.location.href = "/";
      }
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  const [showPassword, setShowPassword] = useState(false);

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
        <div className="flex flex-col gap-6 max-w-64 mx-auto">
          <h1 className="text-2xl font-bold w-full text-center">Login</h1>
          <div className="flex flex-col gap-2">
            <h1 className="text-sm">Email</h1>
            <TextField
              type="email"
              className="bg-white rounded-md"
              sx={{
                "& fieldset": {
                  borderRadius: "6px",
                  borderColor: "#DADADA",
                },
              }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="test@test.com"
              autoFocus
              required
              fullWidth
              variant="outlined"
              autoComplete="email"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h1>Senha</h1>
            <div className="relative">
              <TextField
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="•••••"
                required
                fullWidth
                variant="outlined"
                autoComplete="current-password"
                className="bg-white rounded-md"
                sx={{
                  "& fieldset": {
                    borderRadius: "6px",
                    borderColor: "#DADADA",
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <IconButton
                      className={`absolute right-0 top-0 mt-2 mr-2 text-[${
                        showPassword ? "#C4C4C4" : "#DADADA"
                      }]`}
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <Eye /> : <EyeClosed />}
                    </IconButton>
                  ),
                }}
              />
            </div>
          </div>
          <p className="hover:underline hover:cursor-pointer select-none text-sm w-fit">
            Esqueceu senha?
          </p>
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="bg-destaque-fraca text-black font-bold p-2 rounded-md shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"
          >
            {loading ? "Loading..." : "Entrar"}
          </button>
        </div>
        <p className="hover:underline hover:cursor-pointer select-none text-[10px]  w-fit">
          Não tem uma conta ainda? <b>Crie uma de graça</b>
        </p>
      </div>
    </div>
  );
}

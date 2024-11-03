"use client";

import { useState } from "react";
import { TextField, Button } from "@mui/material";
import Header from "../../components/header";

export default function CadastroPage() {
  const [feira, setFeira] = useState<TypeFeira>({
    id: "",
    name: "",
    address: "",
    number: "",
    city: "",
    description: "",
    image: "",
    feiranteID: "",
    date: new Date(),
    tags: [],
    nota: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFeira({ ...feira, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/feiras", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(feira),
      });
      const data = await res.json();
      if (data.error) {
        alert(data.error);
      } else {
        alert("Feira criada com sucesso!");
        window.location.href = "/";
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-[#C4C4C410] to-[#8c8c8c10]">
      <Header />
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
          Cadastro de Feira
        </h1>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Nome"
            name="name"
            value={feira.name}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Endereço"
            name="address"
            value={feira.address}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Número"
            name="number"
            value={feira.number}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Cidade"
            name="city"
            value={feira.city}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Descrição"
            name="description"
            value={feira.description}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Imagem"
            name="image"
            value={feira.image}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="ID do Feirante"
            name="feiranteID"
            value={feira.feiranteID}
            onChange={handleChange}
            fullWidth
          />
          <Button type="submit" variant="contained">
            Cadastrar
          </Button>
        </form>
      </div>
    </div>
  );
}

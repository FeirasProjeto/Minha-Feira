"use client";

import Header from "../../components/header";
import { Image } from "./componentes/Image";
import { Banner } from "../../components/banner";
import { Input } from "./componentes/Input";
import { Map } from "./componentes/Map";
import { Select } from "./componentes/Select";
import { Weekly } from "./componentes/Weekly";
import { TextField } from "./componentes/TextField";
import { Time } from "./componentes/Time";
import { Check } from "lucide-react";
import Link from "next/link";

export default function CadastroPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-[#C4C4C410] to-[#8c8c8c10]">
      <Header />
      <img
        src="./bolinhas/01.svg"
        className="fixed bottom-0 left-0 grayscale z-0"
      />
      <img
        src="./bolinhas/02.svg"
        className="fixed bottom-0 right-0 grayscale z-0"
      />
      <div className="bg-[#ececec7c] border border-gradient-to-r from-[#C4C4C410] to-[#8c8c8c10] my-auto mx-auto min-w-[500px] rounded-3xl p-10 gap-16 flex flex-col z-10">
        <Banner />
        <div className="flex gap-4">
          <div className="flex flex-col gap-4">
            <Image />
            <Input
              label="Nome da feira:"
              placeholder="Adicione aqui o nome da feira"
              required
              type="text"
              onChange={(e) => console.log(e)}
            />
            <Input
              label="Endereço:"
              placeholder="Adicione aqui o endereço"
              required
              type="text"
              onChange={(e) => console.log(e)}
            />
          </div>
          <div className="flex flex-col gap-4">
            {/* <Map /> */}
            <div className="flex gap-4">
              <Weekly
                weekdays={[
                  "Segunda",
                  "Terça",
                  "Quarta",
                  "Quinta",
                  "Sexta",
                  "Sábado",
                  "Domingo",
                ]}
                setWeekdays={() => {}}
              />
              <div className="flex flex-col">
                <Time
                  label="Abertura:"
                  placeholder={new Date().toLocaleTimeString("pt-BR", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                  })}
                  required
                  onChange={(e) => console.log(e)}
                />
                <Select
                  label="Cidade:"
                  placeholder="Selecione uma cidade"
                  items={[
                    "São Paulo",
                    "Rio de Janeiro",
                    "Belo Horizonte",
                    "Salvador",
                  ]}
                  required
                />
                <Select
                  label="Estado:"
                  placeholder="Selecione um Estado"
                  items={[
                    "São Paulo",
                    "Rio de Janeiro",
                    "Rio Grande do Sul",
                    "Paraná",
                  ]}
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <TextField
          label="Descrição:"
          placeholder="Adicione aqui a descrição"
          onChange={(e) => console.log(e)}
        />
        <div className="flex justify-center gap-10">
          <button className="text-white bg-green-600 rounded-xl flex gap-4 justify-evenly py-2 px-5 text-2xl items-center shadow-big hover:cursor-pointer hover:scale-110 transition-transform">
            <Check size={24} />
            SALVAR
          </button>
          <button className="text-white bg-red-600 rounded-xl flex gap-4 justify-evenly py-2 px-5 text-2xl items-center shadow-big hover:cursor-pointer hover:scale-110 transition-transform">
            EXCLUIR
          </button>
          <Link
            href="/"
            className="text-black bg-white rounded-xl flex gap-4 justify-evenly py-2 px-5 text-2xl items-center shadow-big hover:cursor-pointer hover:scale-110 transition-transform"
          >
            VOLTAR
          </Link>
        </div>
      </div>
    </div>
  );
}

"use client";

import Header from "../../components/header";
import { Image } from "./componentes/Image";
import { Banner } from "../../components/banner";
import { Input } from "./componentes/Input";
import { Map } from "./componentes/Map";
import { Select } from "./componentes/Select";
import { Weekly } from "./componentes/Weekly";

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
      <div className="bg-[#ECECEC] border border-gradient-to-r from-[#C4C4C410] to-[#8c8c8c10] my-auto mx-auto w-[500px] rounded-3xl p-10 gap-16 flex flex-col">
        <Banner />
        <Image />
        <Map />
        <Input
          label="Nome da feira:"
          placeholder="Adicione aqui o nome da feira"
          required
          type="text"
          onChange={(e) => console.log(e)}
        />
        <Select
          label="Cidade:"
          placeholder="Selecione uma cidade"
          items={["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Salvador"]}
          required
        />
        <Weekly weekdays={[]} setWeekdays={() => {}} />
      </div>
    </div>
  );
}

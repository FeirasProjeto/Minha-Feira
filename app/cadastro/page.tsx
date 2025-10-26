"use client";

import Header from "@/components/header";
import { Image } from "./componentes/Image";
import { Input } from "./componentes/Input";
import { Select } from "./componentes/Select";
import { Weekly } from "./componentes/Weekly";
import { TextField } from "./componentes/TextField";
import { Time } from "./componentes/Time";
import { Check } from "lucide-react";
import { useState } from "react";
import { DateInput } from "./componentes/DateInput";
import { Switch } from "@mui/material";
import { sendFeira } from "@/hooks/Feiras";
import { TagInput } from "./componentes/TagInput";
import { useRouter } from "next/navigation";

import Link from "next/link";
import Banner from "@/components/banner";

export default function CadastroPage() {
  const def: addFeira = {
    nome: "",
    endereco: "",
    numero: "",
    cidade: "",
    coordenada: "00", //TODO
    horario: "",
    data: "",
    descricao: "",
    imagem: "",
    userId: "4cafdc53-34a2-4e31-8494-5ae08942ef71", //TODO
  };

  const [weekly, setWeekly] = useState(false);
  const [feira, setFeira] = useState<addFeira>(def);

  const [tags, setTags] = useState<Tag[]>([]);
  const [dias, setDias] = useState<diaSemana[]>([]);

  const router = useRouter();

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
      <div className="bg-[#ececec7c] border border-gradient-to-r from-[#C4C4C410] to-[#8c8c8c10] my-auto mx-auto pc:min-w-1/2 rounded-3xl p-10 gap-16 flex flex-col z-10">
        <Banner />
        <div className="flex pc:flex-row flex-col gap-4">
          <div className="flex flex-col gap-4">
            <Image
              onClick={() => {
                const input = window.prompt(
                  "Adicione aqui o link da imagem",
                  ""
                );
                if (input) {
                  setFeira({
                    ...feira,
                    imagem: input,
                  });
                }
              }}
              value={feira.imagem}
            />
            <Input
              label="Nome da feira:"
              placeholder="Adicione aqui o nome da feira"
              required
              type="text"
              onChange={(e) =>
                setFeira({
                  ...feira,
                  nome: e,
                })
              }
              value={feira.nome}
            />
            <Input
              label="Endereço:"
              placeholder="Adicione aqui o endereço"
              required
              type="text"
              onChange={(e) =>
                setFeira({
                  ...feira,
                  endereco: e,
                })
              }
              value={feira.endereco}
            />
            <Input
              label="Número:"
              placeholder="Número da feira"
              required
              type="text"
              onChange={(e) =>
                setFeira({
                  ...feira,
                  numero: e,
                })
              }
              value={feira.numero}
            />
          </div>
          <div className="flex flex-col gap-4">
            {/* <Map /> */}
            <div className="flex gap-4">
              <div className="flex flex-col w-full">
                <div>
                  <div className="flex justify-between text-2xl">
                    <h1>{weekly ? "Semanal" : "Não semanal"}</h1>
                    <Switch
                      onChange={(e) => {
                        if (e.target.checked) {
                          setDias([]);
                        } else {
                          setFeira({ ...feira, data: "" });
                        }
                        setWeekly(e.target.checked);
                      }}
                    />
                  </div>
                  {weekly ? (
                    <Weekly
                      weekdays={dias}
                      onChange={(e: Tag, bool: boolean) => {
                        if (bool) {
                          setDias([...dias, e]);
                        } else {
                          setDias(dias.filter((d) => d.id !== e.id));
                        }
                      }}
                    />
                  ) : (
                    <DateInput
                      onChange={(e) => setFeira({ ...feira, data: e })}
                      value={feira.data}
                    />
                  )}
                </div>
                <Time
                  label="Abertura:"
                  placeholder={"00:00"}
                  required
                  onChange={(e) =>
                    setFeira({
                      ...feira,
                      horario: e,
                    })
                  }
                  value={feira.horario}
                />
                <Select
                  label="Cidade:"
                  placeholder="Selecione uma cidade"
                  items={["Pelotas"]}
                  required
                  onChange={(e) => setFeira({ ...feira, cidade: e })}
                  value={feira.cidade}
                />
                <TagInput onChange={setTags} value={tags} />
              </div>
            </div>
          </div>
        </div>
        <TextField
          label="Descrição:"
          placeholder="Adicione aqui a descrição"
          onChange={(e) =>
            setFeira({
              ...feira,
              descricao: e,
            })
          }
          value={feira.descricao}
        />
        <div className="flex justify-center gap-10">
          <button
            disabled={
              Object.entries(def).some(
                ([key, value]) =>
                  !["coordenada", "userId", "data", "descricao"].includes(
                    key
                  ) && feira[key as keyof typeof feira] === value
              ) ||
              (feira.data === def.data && dias.length === 0) ||
              (feira.data !== def.data && dias.length !== 0)
            }
            className="text-white bg-green-600 rounded-xl flex gap-4 justify-evenly py-2 px-5 text-2xl items-center shadow-big hover:cursor-pointer hover:scale-110 transition-transform
            disabled:bg-gray-400
            disabled:cursor-not-allowed
            "
            onClick={() => {
              sendFeira(feira, tags, dias)
                .then(() => {
                  alert("Feira cadastrada com sucesso!");
                  router.push("/");
                })
                .catch(() => {
                  alert("Erro ao cadastrar feira!");
                });
            }}
          >
            <Check size={24} />
            SALVAR
          </button>
          {/* <button className="text-white bg-red-600 rounded-xl flex gap-4 justify-evenly py-2 px-5 text-2xl items-center shadow-big hover:cursor-pointer hover:scale-110 transition-transform">
            EXCLUIR
          </button> */}
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

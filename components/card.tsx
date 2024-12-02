import { IconButton } from "@mui/material";
import { Calendar, Clock, Heart, MapPin, Star, StarHalf } from "lucide-react";
import React from "react";

interface Props {
  feira: TypeFeira;
  openModal: (f: TypeFeira) => void;
}

export function Card({ feira, openModal }: Props) {
  const [stared, setStared] = React.useState(false);

  return (
    <div className="bg-white rounded-lg p-5 shadow-md w-[420px] h-[340px] flex flex-col justify-between hover:shadow-big hover:scale-105 transition-all">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <button
            onClick={() => openModal(feira)}
            className="text-lg font-bold text-secundaria-forte hover:underline transition-all hover:cursor-pointer w-fit text-left"
          >
            {feira.nome}
          </button>
          <div className="flex gap-2">
            {feira.tags.map((tag) => (
              <div className="bg-secundaria-forte rounded-full px-2 py-1 text-sm">
                <div className="text-white">{tag.tag.nome}</div>
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            {Array.from({ length: 5 }).map((_, i) =>
              i < Math.floor(feira.nota) ? (
                <Star
                  key={i}
                  fill="currentColor"
                  className={"text-secundaria-forte"}
                />
              ) : i === Math.floor(feira.nota) ? (
                <div>
                  <StarHalf
                    fill="currentColor"
                    className={"text-secundaria-forte absolute z-10"}
                  />
                  <Star className="text-secundaria-forte absolute z-0" />
                </div>
              ) : (
                <Star key={i} className={"text-secundaria-forte"} />
              )
            )}
          </div>
        </div>
        <IconButton onClick={() => setStared(!stared)} className="h-fit">
          <Heart
            className="text-secundaria-forte"
            fill={stared ? "currentColor" : "none"}
          />
        </IconButton>
      </div>
      <div className="mt-5 overflow-hidden rounded-lg h-[200px] bg-destaque-forte flex items-center justify-center">
        <img
          src={feira.imagem}
          alt={feira.nome}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "./logo.svg";
            (e.target as HTMLImageElement).className = "h-12";
          }}
        />
      </div>
      <div className="mt-5 flex justify-between font-semibold">
        <div className="flex items-center gap-2">
          <MapPin className="text-secundaria-forte" />
          <div className="text-sm text-secundaria-forte">{feira.endereco}</div>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="text-secundaria-forte" />
          <div className="text-sm text-secundaria-forte">
            {feira.diaSemana?.length > 0
              ? feira.diaSemana
                  .map((d) => d.diaSemana.nome.slice(0, 3))
                  .join(", ")
              : new Date(feira.data).toLocaleDateString("pt-BR", {
                  day: "numeric",
                  month: "numeric",
                  year: "numeric",
                })}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="text-secundaria-forte" />
          <div className="text-sm text-secundaria-forte">
            Ás{" "}
            {new Date(feira.data).getHours().toString().padStart(2, "0") +
              ":" +
              new Date(feira.data).getMinutes().toString().padStart(2, "0")}
          </div>
        </div>
      </div>
    </div>
  );
}

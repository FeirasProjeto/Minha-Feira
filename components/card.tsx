import { IconButton } from "@mui/material";
import { Calendar, Clock, MapPin, Star, StarHalf } from "lucide-react";
import React from "react";

export function Card() {
  const mock: TypeFeira = {
    id: "123",
    name: "Lorem ipsum dolor sit amet.",
    address: "R. Dos Bobos, 00",
    number: "123",
    city: "Lorem ipsum dolor sit amet.",
    description: "Lorem ipsum dolor sit amet.",
    image: "https://via.placeholder.com/331x100",
    feiranteID: "123",
    date: new Date(),
    tags: [
      { id: "123", name: "Tag 1" },
      { id: "123", name: "Tag 2" },
    ],
    nota: 3.5,
  };
  const [stared, setStared] = React.useState(false);

  return (
    <div className="bg-white rounded-lg p-5 shadow-md">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <div className="text-lg font-bold text-secundaria-forte">
            {mock.name}
          </div>
          <div className="flex gap-2">
            {mock.tags.map((tag) => (
              <div className="bg-secundaria-forte rounded-full  px-2 py-1 ">
                <div className="text-white">{tag.name}</div>
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            {Array.from({ length: 5 }).map((_, i) =>
              i < Math.floor(mock.nota) ? (
                <Star
                  key={i}
                  fill="currentColor"
                  className={"text-secundaria-forte"}
                />
              ) : i === Math.floor(mock.nota) ? (
                <div>
                  <StarHalf
                    fill="currentColor"
                    className={"text-secundaria-forte absolute z-10"}
                  />
                  <Star className="text-secundaria-forte absolute z-0" />
                </div>
              ) : (
                <Star key={i} className={"text-secundaria-forte ml-5"} />
              )
            )}
          </div>
        </div>
        <IconButton onClick={() => setStared(!stared)} className="h-fit">
          <Star
            className="text-secundaria-forte"
            fill={stared ? "currentColor" : "none"}
          />
        </IconButton>
      </div>
      <div className="mt-5">
        <img src={mock.image} alt="" className="w-full rounded-lg" />
      </div>
      <div className="mt-5 flex justify-between font-semibold">
        <div className="flex items-center gap-2">
          <MapPin className="text-secundaria-forte" />
          <div className="text-sm text-secundaria-forte">{mock.address}</div>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="text-secundaria-forte" />
          <div className="text-sm text-secundaria-forte">
            {mock.date.toLocaleDateString("pt-BR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="text-secundaria-forte" />
          <div className="text-sm text-secundaria-forte">
            Ás{" "}
            {mock.date.getHours().toString().padStart(2, "0") +
              ":" +
              mock.date.getMinutes().toString().padStart(2, "0")}
          </div>
        </div>
      </div>
    </div>
  );
}

import { MapPin } from "lucide-react";

export function Map() {
  return (
    <div className="flex flex-col gap-5">
      <div className="w-full h-32 bg-white rounded-xl flex justify-center items-center shadow-big">
        <MapPin size={100} />
      </div>
      <button className="text-black bg-white rounded-xl w-full flex justify-evenly py-2 text-2xl items-center shadow-big">
        <p>Adicionar imagem</p>
        <MapPin />
      </button>
    </div>
  );
}

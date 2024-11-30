import { ImagePlus, Plus } from "lucide-react";

interface Props {
  onClick: () => void;
  value: string;
}

export function Image({ onClick, value }: Props) {
  return (
    <div className="flex flex-col gap-5">
      <div className="w-full h-32 bg-white rounded-xl flex justify-center items-center shadow-big">
        {value ? (
          <img className="w-full h-full object-cover" src={value} alt="" />
        ) : (
          <ImagePlus size={100} />
        )}
      </div>
      <button
        className="text-black bg-white rounded-xl w-full flex justify-evenly py-2 px-10 text-2xl items-center shadow-big"
        onClick={() => onClick()}
      >
        <p>Adicionar imagem</p>
        <Plus />
      </button>
    </div>
  );
}

import { Avatar } from "@mui/material";

export default function Header() {
    // list of all the options on header
  let items = ["Início", "Sobre", "Contato", "Mapa"];

    // WIP selected header
  let atual = "Mapa";
  return (
    <header className="w-full flex justify-between h-20 bg-destaque-forte items-center px-5 border-b border-b-black">
      <img src="./logo.svg" className="h-12" />
      <div className="w-fit h-full flex">
        {items.map((item) => (
          <p
            className={`hover:bg-secundaria-forte/25 
                cursor-pointer
                px-5
                transition-colors h-full flex justify-center items-center text-2xl ${
              atual === item ? "bg-dominante-fraca" : ""
            }`}
          >
            {item}
          </p>
        ))}
      </div>
      <Avatar />
    </header>
  );
}

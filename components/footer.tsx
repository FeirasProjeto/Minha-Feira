import { Divider } from "@mui/material";
import { Facebook, Instagram, Linkedin, LucideInstagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full p-5 bg-white text-black text-lg flex flex-col gap-12">
      <Divider />
      <div className="flex flex-col gap-3 items-center pc:flex-row pc:justify-evenly pc:w-full">
        <img src="./logo v2.svg" className="w-32" alt="logo" />
        <a href="mailto:feirass.projeto@gmail.com" className="text-base hover:underline">
          feirass.projeto@gmail.com
        </a>
        <div className="flex gap-3 flex-col w-full pc:w-fit">
          <h1>Links Rápidos</h1>
          <div className="flex flex-wrap text-black/50">
            <Link href={"/"} className="w-1/2">
              Home
            </Link>
            <a
              href="https://github.com/FeirasProjeto/Minha-Feira"
              className="w-1/2 text-right"
            >
              Github
            </a>
            <Link href={"/"} className="w-1/2">
              Mapa
            </Link>
            <p className="w-1/2 text-right hover:cursor-not-allowed">
              Instagram
            </p>
          </div>
        </div>
      </div>
      <Divider />
      <div className="flex flex-col gap-3 items-center pc:flex-row pc:justify-evenly">
        <div className="flex gap-2">
          <button className="rounded-full p-2 hover:bg-black/10 hover:scale-110 transition-all border-4 border-inherit hover:cursor-not-allowed">
            <LucideInstagram size={40} className=" p-2" />
          </button>
          <button className="rounded-full p-2 hover:bg-black/10 hover:scale-110 transition-all border-4 border-inherit hover:cursor-not-allowed">
            <Linkedin size={40} className="p-2" />
          </button>
          <button className="rounded-full p-2 hover:bg-black/10 hover:scale-110 transition-all border-4 border-inherit hover:cursor-not-allowed">
            <Facebook size={40} className="p-2" />
          </button>
        </div>
        <div className="flex gap-2">
          <p>Um produto de</p>
          <img src="./logo v2.svg" className="w-12" alt="logo" />
        </div>
        <p>
          © 2024 <b>Minha Feira</b>. All rights reserved
        </p>
      </div>
    </div>
  );
}

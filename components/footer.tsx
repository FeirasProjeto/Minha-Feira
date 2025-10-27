import { Facebook, Linkedin, Twitter, Instagram, Globe } from "lucide-react";
import { Divider } from "@mui/material";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 text-gray-800 text-sm">
      <div className="max-w-7xl mx-auto py-8 px-6 grid grid-cols-2 md:grid-cols-4 gap-6">

        {/* Logo e descrição */}
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-gray-900 text-base">MinhaFeira</h2>
          <p className="text-gray-700 leading-relaxed text-xs">
            Descubra feiras próximas, explore produtos e eventos culturais.
          </p>
        </div>

        {/* Links principais */}
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold text-gray-700 text-xs">Links</h3>
          <a href="#" className="hover:underline text-xs">Funcionalidades</a>
          <a href="#" className="hover:underline text-xs">Agendar demo</a>
          <a href="#" className="hover:underline text-xs">Blog</a>
        </div>

        {/* Redes sociais */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-gray-700 text-xs">Redes sociais</h3>
          <div className="flex gap-2">
            <button className="bg-black rounded-full p-2 text-white hover:opacity-80">
              <Facebook size={16} />
            </button>
            <button className="bg-black rounded-full p-2 text-white hover:opacity-80">
              <Linkedin size={16} />
            </button>
            <button className="bg-black rounded-full p-2 text-white hover:opacity-80">
              <Twitter size={16} />
            </button>
            <button className="bg-black rounded-full p-2 text-white hover:opacity-80">
              <Instagram size={16} />
            </button>
          </div>
        </div>

        {/* Idioma e cookies */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 border border-gray-400 rounded-xl px-3 py-1 w-fit text-xs">
            <Globe size={14} />
            <span>Português - BR</span>
          </div>
          <p className="text-gray-600 text-xs">
            Usamos cookies para melhorar sua experiência.
          </p>
        </div>

      </div>

      <Divider className="border-gray-300 mt-6" />
      <p className="text-center text-gray-500 text-xs py-2">
        © 2024 MinhaFeira. Todos os direitos reservados.
      </p>
    </footer>
  );
}

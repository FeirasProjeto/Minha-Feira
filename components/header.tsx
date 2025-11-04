"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const items = ["Sobre", "Serviços", "Contato", "FAQ"];

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between px-4 sm:px-6 h-16 sm:h-20">
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <img 
            src="/Logo.png" 
            alt="Logo Minha Feira" 
            className="h-8 sm:h-10 w-auto" 
          />
        </Link>

        {/* BOTÃO HAMBÚRGUER */}
        <button
          className="lg:hidden text-gray-900"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menu"
        >
          {isOpen ? <X size={24} className="sm:w-28" /> : <Menu size={24} className="sm:w-28" />}
        </button>

        {/* NAV DESKTOP */}
        <nav className="hidden lg:flex items-center space-x-6 md:space-x-10">
          {items.map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-sm sm:text-base text-gray-900 font-medium hover:text-black transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* BOTÃO DESKTOP */}
        <Link
          href="#download"
          className="hidden lg:inline-block bg-[#F7941D] text-white px-4 sm:px-6 py-2 rounded-full shadow-md hover:shadow-lg hover:bg-[#e38300] transition-all font-semibold text-sm sm:text-base"
        >
          Download
        </Link>
      </div>

      {/* MENU MOBILE */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-md border-t border-gray-100">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {items.map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-sm sm:text-base text-gray-900 font-medium hover:text-[#F7941D] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
            <Link
              href="#download"
              className="bg-[#F7941D] text-white px-4 sm:px-6 py-2 rounded-full shadow-md hover:shadow-lg hover:bg-[#e38300] transition-all font-semibold text-sm sm:text-base"
              onClick={() => setIsOpen(false)}
            >
              Download
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

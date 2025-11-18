"use client";

import { User } from "lucide-react";

export default function Header() {
  return (
    <header className="h-16 flex items-center justify-between px-6 border-b border-gray-700 bg-gray-800">
      <h1 className="text-lg font-semibold">Painel Administrativo</h1>

      <div className="flex items-center gap-3">
        <span className="text-gray-400 text-sm">Admin</span>
        <User size={22} />
      </div>
    </header>
  );
}

"use client";

import { User } from "lucide-react";

// O Header agora aceita 'children', que é o botão de menu hamburger do AdminLayout
export default function HeaderAdmin({ children }) {
    return (
        <header className="sticky top-0 z-30 flex items-center justify-between p-4 bg-gray-800 border-b border-gray-700 w-full">

            <div className="flex items-center gap-3">

                {children}

                <h1 className="text-lg font-semibold text-gray-200 hidden sm:block">
                    Painel Administrativo
                </h1>
            </div>

            <div className="flex items-center gap-2">
                <span className="text-gray-400 text-sm font-medium hidden sm:block">
                    Admin
                </span>
                <div className="p-1.5 bg-gray-700 rounded-full">
                    <User size={20} className="text-green-400" />
                </div>
            </div>

        </header>
    );
}
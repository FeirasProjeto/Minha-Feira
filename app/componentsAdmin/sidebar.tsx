"use client";

import Link from "next/link";
import { LayoutDashboard, ShoppingBasket, LogOut } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const links = [
  { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/feiras", label: "Feiras", icon: ShoppingBasket },
  { href: "/login", label: "Sair", icon: LogOut },
];

export default function Sidebar({ closeSidebar }) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = (e) => {
    e.preventDefault();
    console.log("Fazendo logout...");
    
    // Limpar dados de autenticação (exemplo)
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    
    // Redirecionar para a página de login
    router.push('/login');
  };

  return (
    <aside className="w-64 h-full bg-gray-800 border-r border-gray-700 p-4">
      <h2 className="text-xl font-bold mb-6 text-white">Admin</h2>

      <nav className="space-y-2">
        {links.map(({ href, label, icon: Icon }) => {
          if (label === "Sair") {
            return (
              <button
                key={href}
                onClick={handleLogout}
                className="flex items-center gap-3 px-4 py-2 rounded-lg transition 
                  w-full text-left text-gray-300 hover:bg-red-600 hover:text-white"
              >
                <Icon size={18} />
                {label}
              </button>
            );
          }

          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg transition 
                ${pathname.startsWith(href)
                  ? "bg-gray-700 text-green-400" 
                  : "text-gray-300 hover:bg-gray-700"}`}
              onClick={closeSidebar}
            >
              <Icon size={18} />
              {label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
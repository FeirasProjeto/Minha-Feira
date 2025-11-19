"use client";

import Link from "next/link";
import { LayoutDashboard, ShoppingBasket, Settings } from "lucide-react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/feiras", label: "Feiras", icon: ShoppingBasket },
  { href: "/admin/config", label: "Configurações", icon: Settings },
];

export default function Sidebar({closeSidebar}) {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-full bg-gray-800 border-r border-gray-700 p-4">
      <h2 className="text-xl font-bold mb-6">Admin</h2>

      <nav className="space-y-2">
        {links.map(({ href, label, icon: Icon }) => (
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
        ))}
      </nav>
    </aside>
  );
}

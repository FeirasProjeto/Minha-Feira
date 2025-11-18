"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const parts = pathname.split("/").filter(Boolean);

  const buildPath = (i: number) => "/" + parts.slice(0, i + 1).join("/");

  return (
    <div className="text-sm text-gray-400 flex items-center gap-2">
      {parts.map((part, i) => (
        <span key={i} className="flex items-center gap-2">
          <Link href={buildPath(i)} className="hover:text-white">
            {part.charAt(0).toUpperCase() + part.slice(1)}
          </Link>
          {i < parts.length - 1 && "/"}
        </span>
      ))}
    </div>
  );
}

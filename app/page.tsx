"use client";
import { Drawer } from "@mui/material";
import { use, useEffect, useState } from "react";
import Header from "../components/header";
import { Card } from "../components/card";
import { Search } from "../components/search";
import Link from "next/link";
import { getFeiras } from "../hooks/Feiras";

export default function HomePage() {
  const [feiras, setFeiras] = useState<TypeFeira[]>([]);
  useEffect(() => {
    const fetchFeiras = async () => {
      const feiras = await getFeiras();
      setFeiras(feiras);
    };
    fetchFeiras();
  });

  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Search mock={feiras} setMockData={setFeiras} />

      {/* Botão fixo para cadastro */}
      <div className="fixed bottom-4 right-4">
        <Link href="/cadastro">
          <button className="p-4 bg-secundaria-forte text-white rounded-full shadow-lg hover:bg-secundaria-clara">
            Cadastrar feira
          </button>
        </Link>
      </div>

      {/* Lista de feiras */}
      <div className="flex flex-wrap justify-evenly gap-5 p-5 container mx-auto">
        {feiras.map((mock) => (
          <Card key={mock.id} mock={mock} />
        ))}
      </div>
    </div>
  );
}

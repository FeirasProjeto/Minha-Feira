"use client";
import { Drawer } from "@mui/material";
import { useState } from "react";
import Header from "../components/header";
import { Card } from "../components/card";
import { Search } from "../components/search";
import { feirasArray } from "../mock/feiras";
import Link from "next/link";

export default function HomePage() {
  const [mockData, setMockData] = useState(feirasArray);
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <div className="flex flex-col h-screen bg-[url('https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/02/google-maps-e1707316052388.png?w=1200&h=900&crop=1')]">
      <Header />
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setDrawerOpen(false);
          }
        }}
        BackdropComponent={() => <div />}
        sx={{
          ".MuiDrawer-paper": {
            position: "fixed",
            bottom: 0,
            width: 400,
            top: 80,
            height: "calc(100vh - 80px)",
            background: "rgba(255, 255, 255, 0.25)",
          },
        }}
      >
        <div className="sticky top-4 mx-4 z-50">
          <Search mock={mockData} setMockData={setMockData} />
        </div>
        <div className="flex flex-wrap gap-5 p-5">
          {mockData.map((mock) => (
            <Card key={mock.id} mock={mock} />
          ))}
        </div>
      </Drawer>
      <div
        className={`${drawerOpen ? "hidden" : "block"} m-2`}
        onClick={() => setDrawerOpen(true)}
      >
        <Search mock={mockData} setMockData={setMockData} />
      </div>
      <Link href="/cadastro">
        <p className="absolute bottom-3 right-3 hover:opacity-80 transition-all bg-secundaria-forte text-white px-4 py-2 rounded-2xl">
          Cadastrar feira
        </p>
      </Link>
    </div>
  );
}

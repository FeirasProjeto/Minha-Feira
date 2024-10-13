"use client";
import { Button } from "@mui/material";
import { MonitorCheck } from "lucide-react";
import { useState } from "react";
import Header from "../components/header";
import { Card } from "../components/card";
import { Search } from "../components/search";

export default function HomePage() {
  const mock: TypeFeira = {
    id: "123",
    name: "Lorem ipsum dolor sit amet.",
    address: "R. Dos Bobos, 00",
    number: "123",
    city: "Lorem ipsum dolor sit amet.",
    description: "Lorem ipsum dolor sit amet.",
    image: "https://via.placeholder.com/331x100",
    feiranteID: "123",
    date: new Date(),
    tags: [
      { id: "123", name: "Tag 1" },
      { id: "123", name: "Tag 2" },
    ],
    nota: 3.5,
  };
  return (
    <main className="h-screen w-screen bg-[url('https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/02/google-maps-e1707316052388.png?w=1200&h=900&crop=1')]">
      <Header />
      <Search />
      <Card mock={mock} />
    </main>
  );
}

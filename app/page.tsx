"use client";
import { Button } from "@mui/material";
import { MonitorCheck } from "lucide-react";
import { useState } from "react";
import Header from "../components/header";
import { Card } from "../components/card";
import { Search } from "../components/search";
import { feirasArray } from "../mock/feiras";

export default function HomePage() {
  const [mockData, setMockData] = useState(feirasArray);
  return (
    <main className="h-screen w-screen bg-[url('https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/02/google-maps-e1707316052388.png?w=1200&h=900&crop=1')]">
      <Header />
      <div className="flex flex-col gap-5">
        <Search mock={feirasArray} setMockData={setMockData} />
        {mockData.map((mock) => (
          <Card mock={mock} />
        ))}
      </div>
    </main>
  );
}

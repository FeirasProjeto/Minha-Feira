"use client";
import { useEffect, useState } from "react";
import { getFeiras } from "../hooks/Feiras";

import Header from "../components/header";
import Footer from "../components/footer";
import Banner from "../components/banner";
import Features from "../components/features";
import Faq from "../components/faq";
import Final from "../components/final";

export default function HomePage() {
  const [feiras, setFeiras] = useState<TypeFeira[]>([]);
  const [defaultFeiras, setDefault] = useState<TypeFeira[]>([]);

  useEffect(() => {
    const fetchFeiras = async () => {
      const feiras = await getFeiras();
      setFeiras(feiras);
      setDefault(feiras);
    };
    fetchFeiras();
  }, []);

  const [open, setOpen] = useState(false);
  const [selectedFeira, setSelectedFeira] = useState<TypeFeira>(
    {} as TypeFeira
  );

  const openModal = (f: TypeFeira) => {
    setSelectedFeira(f);
    setOpen(true);
  };

  return (
    <main className="flex-1">
      <div className="flex flex-col min-h-screen bg-[url('/bg-pattern.jpg')] bg-cover bg-center bg-fixed">
        <Header />
        <div className="flex-1">
          <Banner />
          <Features />
          <Faq />
          <Final />
        </div>
        <Footer />
      </div>
    </main>
  );
}
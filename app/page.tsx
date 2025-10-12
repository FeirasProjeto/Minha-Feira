"use client";
import { useEffect, useState } from "react";
import { getFeiras } from "../hooks/Feiras";

import Header from "../components/header";
import Banner from "../components/banner";
import Features from "../components/features";
import Faq from "../components/faq";


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
    <div className="flex flex-col min-h-screen">
      <Header />
      <Banner />
      <Features />
      <Faq />
    </div>
  );
}

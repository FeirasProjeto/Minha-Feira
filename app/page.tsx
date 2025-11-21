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

  return (
    <main className="flex-1">
      <Header />

      <section className="flex flex-col gap-8">
        <Banner />
        <Features />
        <Faq />
        <Final />
      </section>

      <Footer />
    </main>
  );
}

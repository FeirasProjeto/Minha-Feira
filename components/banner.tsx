import Image from "next/image";
import Link from "next/link";
import Cards_Features from "./cards_features";

export default function Banner() {
  return (
    <section className="w-full bg-gradient-to-br from-white to-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-row items-center gap-10">
        {/* Coluna Esquerda - Call to action */}
        <div className="flex-1 text-left relative">
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight relative">
            Facilite suas compras, baixe o aplicativo{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-gray-900">MinhaFeira</span>

              <Image
                src="/circulo.svg" 
                alt="Círculo verde"
                width={320}
                height={80}
                className="absolute -bottom-4 left-[-15px] w-[320px] h-auto select-none pointer-events-none"
              />
            </span>
          </h1>

          <p className="text-gray-600 mt-6 text-base max-w-md">
            Se conecte com feirantes e produtores locais de Pelotas. 
  Descubra feiras próximas, conheça os produtos disponíveis e viva uma experiência 
  mais prática e sustentável ao fazer suas compras.
          </p>

          <div className="mt-8">
            <Link href="#">
              <Image
                src="/google-play-badge.png"
                alt="Get it on Google Play"
                width={200}
                height={60}
                className="hover:scale-105 transition-transform"
              />
            </Link>
          </div>
        </div>

        {/* Coluna Direita - Mockup isométrico*/}
        <div className="flex-1 flex justify-center">
          <Image
            src="/MockupLanding.png"
            alt="App Preview"
            width={500}
            height={400}
            className="drop-shadow-2xl"
          />
        </div>
        
      </div>
      <Cards_Features />
    </section>
  );
}

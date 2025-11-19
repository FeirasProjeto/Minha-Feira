import Image from "next/image";
import Link from "next/link";
import Cards_Features from "./cards_features";

export default function Banner() {
  return (
    <section id="sobre" className="w-full bg-gradient-to-br from-white to-gray-50 py-16 md:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 
      flex 
      flex-row 
      items-center 
      gap-4 md:gap-12 lg:gap-16">
        {/* Coluna Esquerda*/}
        <div className="w-1/2 min-w-[150px] text-left relative">
          <h1 className="text-xl sm:text-2xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight tracking-tight">
            Facilite suas compras, 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-700 mt-0 md:mt-4">
              baixe o aplicativo
            </span>
          </h1>

          <p className="text-gray-600 mt-2 sm:mt-4 md:mt-10 text-xs sm:text-base max-w-full leading-relaxed">
            Se conecte com feirantes e produtores locais de Pelotas.
            Descubra feiras próximas, conheça os produtos disponíveis e viva uma experiência
            mais prática e sustentável ao fazer suas compras.
          </p>

          <div className="mt-4 sm:mt-6 md:mt-12">
            <Link href="#" className="inline-block">
              <Image
                src="/google-play-badge.png"
                alt="Get it on Google Play"
                width={240}
                height={72}
                sizes="(max-width: 640px) 80px, 160px"
                className="w-20 sm:w-32 md:w-56 hover:scale-105 transition-transform duration-300"
              />
            </Link>
          </div>
        </div>

        {/* Coluna Direita*/}
        <div className="w-1/2 flex justify-center md:justify-end">
          <Image
            src="/MockupLanding.png"
            alt="App Preview"
            width={600}
            height={480}
            sizes="(max-width: 640px) 150px, (max-width: 1024px) 480px, 600px"
            className="drop-shadow-2xl w-full max-w-[150px] sm:max-w-[200px] md:max-w-[520px] lg:max-w-[600px] h-auto object-contain"
            priority
          />
        </div>
      </div>

      <div className="mt-16 md:mt-20 lg:mt-24 px-4 sm:px-6 lg:px-8">
        <Cards_Features />
      </div>
    </section>
  );
}
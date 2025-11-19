import Image from "next/image";

export default function Final() {
  return (
    <section className="w-full bg-gradient-to-br from-white to-gray-50 **py-16 md:pt-32 md:pb-16**">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-12 md:gap-28">
        {/* === Coluna Esquerda === */}
        <div className="w-full md:w-1/2 flex flex-col justify-start text-center md:text-left md:-mt-32">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            Não perca nenhuma feira perto de você
          </h2>

          <p className="text-gray-600 mb-8 max-w-full md:max-w-md mx-auto md:mx-0">
Baixe o Minha Feira e descubra, avalie e acompanhe feiras de todos os tipos, de tudo na palma da sua mão          </p>

          <div className="flex justify-center md:justify-start">
            <Image
              src="/google-play-badge.png"
              alt="Get it on Google Play"
              width={200}
              height={60}
              sizes="(max-width: 768px) 160px, 200px"
              className="w-40 sm:w-52 cursor-pointer hover:scale-105 transition-transform duration-300 h-auto"
            />
          </div>
        </div>

        {/* === Coluna Direita === */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center mt-8 md:mt-0">
          <div className="relative w-full max-w-[300px] md:max-w-xl">
            <Image
              src="/FinalMockup.png"
              alt="App Preview"
              width={420}
              height={800}
              sizes="(max-width: 768px) 300px, 420px"
              className="drop-shadow-2xl w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

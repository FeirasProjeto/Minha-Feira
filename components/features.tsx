import Image from "next/image";
import Link from "next/link";

export default function Features() {
  return (
    <section className="w-full bg-gradient-to-br from-white to-gray-50 py-10 space-y-20">

      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-900">
          Features
        </h2>
        <div className="w-16 h-2 bg-green-200 rounded-full mx-auto mt-4"></div>
      </div>

      {/* === Seção 1  === */}
      <div className="max-w-7xl mx-auto px-6 flex flex-row items-center gap-10">
        {/* Imagem */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/MockupLanding2.png"
            alt="App Preview"
            width={500}
            height={400}
            className="drop-shadow-2xl rounded-xl"
          />
        </div>

        {/* Texto */}
        <div className="flex-1 text-left relative">
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight relative">
            Encontre feiras próximas em {" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-red-700">segundos</span>
            </span>
          </h1>

          <p className="text-gray-600 mt-6 text-base max-w-md"> Nossa integração com o Google Maps permite que você descubra rapidamente os eventos próximos, visualize rotas e planeje o melhor caminho até eles.
          </p>
        </div>
      </div>

      {/* === Seção 2  === */}
      <div className="max-w-7xl mx-auto px-6 flex flex-row items-center gap-10">

        {/* Texto */}
        <div className="flex-1 text-left relative">
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight relative">
            Seu evento perfeito, em{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-purple-600"> um clique</span>
            </span>
          </h1>

          <p className="text-gray-600 mt-6 text-base max-w-md">
Descubra feiras que combinam com seu estilo: hortifruti, cultural, artesanal, tecnológica e muito mais. Aplique filtros personalizados e ache exatamente o que deseja.        </p>
        </div>
        {/* Imagem */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/MockupLanding1.png"
            alt="App Preview 2"
            width={500}
            height={400}
            className="drop-shadow-2xl rounded-xl"
          />
        </div>
      </div>
      {/* === Seção 3  === */}
      <div className="max-w-7xl mx-auto px-6  items-center gap-10">

        {/* Texto */}
        <div className="flex-1 text-center relative">
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight relative">
            Tudo o que você precisa em um só aplicativo.
          </h1>

          <p className="text-gray-600 mt-6 mb-10 text-base max-w-md mx-auto">
Receba notificações em tempo real sobre feiras próximas, descubra detalhes, comentários e avaliações de cada evento. Explore categorias, planeje rotas e nunca perca uma feira que combina com você. Tudo em um único app, rápido e fácil de usar.
          </p>
        </div>
        {/* Imagem 4*/}
        <div className="flex-1 flex justify-center">
          <Image
            src="/Mockup3.png"
            alt="App Preview 2"
            width={500}
            height={400}
            className="drop-shadow-2xl rounded-xl"
          />
        </div>
      </div>

    </section>
  );
}

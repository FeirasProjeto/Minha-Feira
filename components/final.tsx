import Image from "next/image";

export default function Final() {
  return (
    <section className="w-full bg-gradient-to-br from-white to-gray-50 pt-32 pb-0">
      <div className="max-w-7xl mx-auto px-6 flex flex-row justify-between items-center gap-28">
        {/* === Coluna Esquerda === */}
        <div className="flex flex-col justify-start text-left flex-1 -mt-32">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            Easy Way to discover{" "}
            <span className="text-green-500">feiras</span>
          </h2>

          <p className="text-gray-600 mb-8 max-w-md">
            Easy to use mobile app that supports Android and iOS.
          </p>

          <div className="flex justify-start">
            <Image
              src="/google-play-badge.png"
              alt="Get it on Google Play"
              width={200}
              height={60}
              className="cursor-pointer hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* === Coluna Direita === */}
        <div className="flex-1 flex justify-end items-center max-w-xl">
          <div className="relative w-[360px] md:w-[420px]">
            <Image
              src="/FinalMockup.png"
              alt="App Preview"
              width={420}
              height={800}
              className="drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

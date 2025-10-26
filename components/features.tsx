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
            Lorem ipsum dolor sit{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-gray-900">amet elit.</span>
            </span>
          </h1>

          <p className="text-gray-600 mt-6 text-base max-w-md">
            Discover the power of our secure and rewarding credit cards.
            Explore our range of credit cards and take control of your finances today.
          </p>
        </div>
      </div>

      {/* === Seção 2  === */}
      <div className="max-w-7xl mx-auto px-6 flex flex-row items-center gap-10">

        {/* Texto */}
        <div className="flex-1 text-left relative">
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight relative">
            Lorem ipsum dolor sit{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-gray-900">amet elit.</span>
            </span>
          </h1>

          <p className="text-gray-600 mt-6 text-base max-w-md">
            Discover the power of our secure and rewarding credit cards.
            Explore our range of credit cards and take control of your finances today.
          </p>
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
            Lorem ipsum dolor sit.
          </h1>

          <p className="text-gray-600 mt-6 mb-10 text-base max-w-md mx-auto">
            Discover the power of our secure and rewarding credit cards.
            Explore our range of credit cards and take control of your finances today.
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

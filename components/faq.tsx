import Image from "next/image";
import Link from "next/link";

export default function Faq() {
    return (
        <section className="w-full bg-gradient-to-br from-white to-gray-50 py-10 space-y-20">
            <div className="flex-1 text-left relative">
                    <h1 className="text-5xl font-extrabold text-gray-900 leading-tight relative">
                        Lorem ipsum dolor sit{" "}
                        <span className="relative inline-block">
                        <span className="relative z-10 text-gray-900">amet elit.</span>

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
                        Discover the power of our secure and rewarding credit cards.
                        Explore our range of credit cards and take control of your finances today.
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
                        src="/placeholder.jpg"
                        alt="App Preview"
                        width={500}
                        height={400}
                        className="drop-shadow-2xl"
                    />
                    </div>
                </section>
            );
        }

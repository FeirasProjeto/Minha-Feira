import Image from "next/image";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "O que é o Minha Feira?",
      answer:
        "O Minha Feira é um aplicativo para celular que ajuda você a encontrar feiras na cidade de Pelotas, no Rio Grande do Sul/Braisl. Nele, você pode ver onde as feiras estão, quais produtos elas vendem e até salvar suas favoritas para visitar depois.",
    },
    {
      question: "Como eu encontro uma feira perto de mim?",
      answer:
        "Ao abrir o aplicativo, toque na aba do mapa. O app mostra todas as feiras próximas à sua localização. Você pode clicar em cada feira para ver endereço, horários e produtos. É preciso permitir que o app acesse sua localização para isso, nas configurações do seu celular.",
    },
    {
      question: "Preciso saber usar tecnologia para usar o aplicativo?",
      answer:
        "Não! O Minha Feira foi feito para ser fácil de usar. Tudo é clicável ou tocável, com instruções claras. Se conseguir tocar na tela do celular, já consegue usar o aplicativo.",
    },
    {
      question: "Como salvar minhas feiras favoritas?",
      answer:
        "Quando encontrar uma feira que goste, toque no ícone de coração ❤️ para favorita-la. Depois, você pode ver todas as suas feiras favoritas na aba 'Favoritas' do aplicativo.",
    },
    {
      question: "E se eu esquecer a senha ou tiver problemas para entrar?",
      answer:
        "Não se preocupe! Na tela de login, existe a opção “Esqueci minha senha”. Toque nela e siga as instruções para criar uma nova senha usando seu e-mail.",
    },
        {
      question: "Preciso pagar para usar o app?",
      answer:
        "Não. O uso do aplicativo é gratuito.",
    },
  ];

  return (
    <section id="faq" className="w-full bg-gradient-to-br from-white to-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-row items-start justify-between gap-16">
        
        {/* Coluna Esquerda - Título + Texto + Imagem */}
        <div className="flex-1 text-left md:text-left">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-3">FAQ</h2>
          <div className="w-16 h-2 bg-green-200 rounded-full mx-left md:mx-0 mb-6"></div>

          <p className="text-gray-600 max-w-sm mb-10 mx-left md:mx-0">
  Aqui respondemos as perguntas mais comuns sobre como usar o Minha Feira. Se tiver mais dúvidas, entre em contato conosco! 
          </p>

          <div className="flex justify-left md:justify-start">
            <Image
              src="/FAQmockup.png"
              alt="FAQ Illustration"
              width={300}
              height={300}
              className="drop-shadow-xl"
            />
          </div>
        </div>

        {/* Accordion */}
        <div className="flex-1 w-full mt-8 max-w-xl space-y-4">
          {faqs.map((item, i) => (
            <div
              key={i}
              className={`rounded-2xl shadow-sm overflow-hidden transition-all ${
                openIndex === i ? "bg-green-500 text-white" : "bg-white"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center text-left px-6 py-5 font-semibold text-lg"
              >
                {item.question}
                {openIndex === i ? (
                  <ChevronUp size={30} className="text-white" />
                ) : (
                  <ChevronDown
                    size={22}
                    className={`${
                      openIndex === i ? "text-white" : "text-purple-500"
                    }`}
                  />
                )}
              </button>

              {openIndex === i && (
                <div className="px-6 pb-5 text-sm leading-relaxed">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Pellentesque ac bibendum tortor?",
      answer:
        "Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor.",
    },
    {
      question: "In mi nulla, fringilla vestibulum?",
      answer:
        "Curabitur vel lorem id libero maximus tincidunt sit amet non odio.",
    },
    {
      question: "In mi nulla, fringilla vestibulum?",
      answer:
        "Curabitur vel lorem id libero maximus tincidunt sit amet non odio.",
    },
    {
      question: "In mi nulla, fringilla vestibulum?",
      answer:
        "Curabitur vel lorem id libero maximus tincidunt sit amet non odio.",
    },
    {
      question: "In mi nulla, fringilla vestibulum?",
      answer:
        "Curabitur vel lorem id libero maximus tincidunt sit amet non odio.",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-br from-white to-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-row items-start justify-between gap-16">
        
        {/* Coluna Esquerda - Título + Texto + Imagem */}
        <div className="flex-1 text-left md:text-left">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-3">FAQ</h2>
          <div className="w-16 h-2 bg-green-200 rounded-full mx-left md:mx-0 mb-6"></div>

          <p className="text-gray-600 max-w-sm mb-10 mx-left md:mx-0">
            Vestibulum sit amet tortor sit amet libero lobortis semper at et odio.
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

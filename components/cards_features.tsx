import Image from "next/image";

export default function Cards_Features() {
  const features = [
    {
      icon: "/Logo.png",
      title: "Lorem Ipsum",
      desc: "Fusce dictum lobortis est a sollicitudin.",
      bg: "bg-gray-800",
    },
    {
      icon: "/Logo.png",
      title: "Lorem Ipsum",
      desc: "Fusce dictum lobortis est a sollicitudin.",
      bg: "bg-gray-800",
    },
    {
      icon: "/Logo.png",
      title: "Lorem Ipsum",
      desc: "Fusce dictum lobortis est a sollicitudin.",
      bg: "bg-gray-800",
    },
  ];

  return (
    <section className="w-full flex justify-center mt-16 px-4">
      <div className="w-full max-w-6xl bg-gray-100 rounded-3xl shadow-sm px-8 py-10">
            <div className="grid grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-6 rounded-2xl  hover:shadow-md transition-all duration-300"
            >
              <div
                className={`${f.bg} p-4 rounded-2xl flex items-center justify-center shrink-0`}
              >
                <Image src={f.icon} alt={f.title} width={28} height={28} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg">
                  {f.title}
                </h3>
                <p className="text-gray-600 text-sm max-w-[220px]">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

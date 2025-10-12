import Link from "next/link";

export default function Header() {
  const items = ["Sobre", "Serviços", "Contato", "FAQ"];

  return (
    <header className="w-full bg-white shadow-sm h-20 flex items-center">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between px-6">
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="Logo Minha Feira"
            className="h-10 w-auto"
          />
        </Link>

        <nav className="flex items-center space-x-10">
          {items.map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-gray-900 font-medium hover:text-black transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>

        <Link
          href="#download"
          className="bg-[#F7941D] text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg hover:bg-[#e38300] transition-all font-semibold"
        >
          Download
        </Link>
      </div>
    </header>
  );
}

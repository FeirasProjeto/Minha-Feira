import "../styles/globals.css";
import Footer from "../components/footer";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "Minha Feira",
  description: "Aplicativo Minha Feira.",
  icons: {
    icon: "/Logo.png",
  },
  // você também pode declarar viewport aqui dependendo da versão do Next
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-landing bg-no-repeat bg-center bg-cover sm:bg-contain md:bg-cover min-h-screen flex justify-center">
        <div className="bg-landing bg-cover bg-center min-h-screen">
          {/* Container responsivo, centralizado e com padding adaptativo */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col min-h-screen">
            {/* main flex-1 garante que o footer fique no fim da tela quando necessário */}
            <main className="flex-1 w-full">
              {children}
            </main>

            <Footer />
            <Analytics />
          </div>
        </div>
      </body>
    </html>
  );
}

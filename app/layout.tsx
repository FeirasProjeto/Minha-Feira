import "../styles/globals.css";
import Footer from "../components/footer";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "Minha Feira",
  description: "Aplicativo Minha Feira.",
  icons: {
    icon: "/Logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-landing bg-no-repeat bg-center bg-cover sm:bg-contain md:bg-cover min-h-screen flex justify-center">
        <div className="bg-landing bg-cover bg-center min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col min-h-screen">
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

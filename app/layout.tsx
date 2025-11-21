import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "Minha Feira",
  description: "Aplicativo Minha Feira.",
  icons: {
    icon: "/Logo.png",
  },
};

// components/RootLayout.js (Arquivo Corrigido)

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <body className="overflow-x-hidden-x-hidden h-full"> {/*n tem rolagem horizontal */}

        <div className="sm:bg-contain md:bg-cover flex flex-col">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-1">
            <main className="flex-1 w-full">{children}</main>
            <Analytics />
          </div>
        </div>
      </body>
    </html>
  )
}
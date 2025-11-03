import { icons } from "lucide-react";
import "../styles/globals.css";
import Footer from "../components/footer";
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: "Minha Feira",
  description: "Aplicativo Minha Feira.",
  icons: {
    icon: "/Logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-landing bg-cover bg-center min-h-screen">
        {/* Container principal responsivo */}
        <div className="min-h-screen flex flex-col">
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  );
}
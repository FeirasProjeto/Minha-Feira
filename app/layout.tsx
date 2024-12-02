import { icons } from "lucide-react";
import "../styles/globals.css";

export const metadata = {
  title: "Minha Feira",
  description: "Website da Minha Feira.",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

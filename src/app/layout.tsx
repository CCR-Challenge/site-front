import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smarttrack",
  description: "Website de monitoramento para transporte público",
  keywords: "Smarttrack, transporte público, metrô, trem, monitoramento, eficiência",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

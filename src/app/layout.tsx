import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "p2psaudeeseguranca",
  description: "Medicos quem voce pode confiar!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Header />
      <body>{children}</body>
      <Footer />
    </html>
  );
}

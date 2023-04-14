import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "p2psaudeeseguranca",
  description: "Medicos quem voce pode confiar!",
};

const Header = () => {
  return (
    <nav className="fixed top-0 left-0 flex justify-center items-center w-full">
      <div className="flex flex-row justify-around items-center text-center w-full max-w-7xl h-20 bg-slate-200">
        <div>P2P LOGO</div>
        <div>
          <Link href="/">Home</Link>
          <Link href="/servicos">Servicos</Link>
          <Link href="/contato">Contato</Link>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="flex justify-center items-center w-full">
      <div className="flex flex-row justify-around items-center text-center w-full max-w-7xl h-28 bg-slate-200">
        <p>p2p logo</p>
        <p>footer bar</p>
        <p>...</p>
      </div>
    </footer>
  );
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

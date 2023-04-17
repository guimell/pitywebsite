"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderLink = ({
  href,
  text,
  pathname,
}: {
  href: string;
  text: string;
  pathname: string;
}) => {
  return (
    <Link
      href={href}
      className="flex flex-col justify-center items-center m-2 p-2 rounded transition hover:bg-slate-300"
    >
      {text}
      <div
        className={`m-0 p-0 w-full h-1 ${pathname === href && "bg-slate-600"}`}
      />
    </Link>
  );
};

export default () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <nav className="fixed top-0 left-0 flex justify-center items-center w-full">
      <div className="flex flex-row justify-around items-center text-center w-full max-w-7xl h-20 bg-slate-200">
        <div className="flex justify-center items-center">P2P LOGO</div>
        <div className="flex flex-row justify-center items-center">
          <HeaderLink href="/" text="Home" pathname={pathname} />
          <HeaderLink href="/servicos" text="Servicos" pathname={pathname} />
          <HeaderLink href="/contato" text="Contato" pathname={pathname} />
        </div>
      </div>
    </nav>
  );
};

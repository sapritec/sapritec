import Link from "next/link";

export default function NavLinks() {
  const Links = [
    {
      name: "",
      href: "",
      Icon: "",
      subItems: [{ name: "", href: "", Icon: "" }],
    },
  ];
  return (
    <nav>
      <ul className="flex gap-8 lg:gap-20 items-center text-md xl:text-xl">
        <Link
          href="/"
          className="text-white hover:text-sky-200 transition-all duration-300"
        >
          Início
        </Link>
        <Link
          href="#aboutus"
          className="text-white hover:text-sky-200 transition-all duration-300"
        >
          Sobre nós
        </Link>
        <Link
          href="#services"
          className="text-white hover:text-sky-200 transition-all duration-300"
        >
          Serviços
        </Link>

        <Link
          href="#contactus"
          className="text-white hover:text-sky-200 transition-all duration-300"
        >
          Contacte-nos
        </Link>
      </ul>
    </nav>
  );
}

export function NavLinksMobile() {
  const Links = [
    {
      name: "",
      href: "",
      Icon: "",
      subItems: [{ name: "", href: "", Icon: "" }],
    },
  ];
  return (
    <nav className="h-full">
      <ul className="flex flex-col justify-evenly items-center text-2xl h-full">
        <Link
          href="/"
          className="text-white hover:text-sky-200 transition-all duration-300"
        >
          Início
        </Link>
        <Link
          href="#aboutus"
          className="text-white hover:text-sky-200 transition-all duration-300"
        >
          Sobre nós
        </Link>
        <Link
          href="#services"
          className="text-white hover:text-sky-200 transition-all duration-300"
        >
          Serviços
        </Link>

        <Link
          href="#contactus"
          className="text-white hover:text-sky-200 transition-all duration-300"
        >
          Contacte-nos
        </Link>
      </ul>
    </nav>
  );
}

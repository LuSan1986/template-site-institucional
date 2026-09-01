interface FooterProps {
  companyName?: string;
  links?: { label: string; href: string }[];
}

export default function Footer({
  companyName = "Nome da Empresa",
  links = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Contato", href: "#contato" },
  ],
}: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white font-bold text-lg">{companyName}</p>

          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>
            &copy; {year} {companyName}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

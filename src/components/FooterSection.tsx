import logo from "@/assets/logo-studio131.png";

const FooterSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const buttons = [
    { label: "Campanhas", href: "https://campanhas.studio131.com.br", external: true },
    { label: "O Plano Profissional", href: "https://planoprofissional.studio131.com.br", external: true },
    { label: "The Journey", href: "https://ajornadaimersao.studio131.com.br", external: true },
    { label: "Voltar ao topo", onClick: scrollToTop },
  ];

  return (
    <footer className="bg-black py-8 md:py-12">
      <div className="flex flex-col items-center gap-6">
        {/* Logo */}
        <img
          src={logo}
          alt="Studio 131"
          className="h-16 md:h-20 w-auto opacity-50"
        />

        {/* Button grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-[92vw] sm:w-auto sm:max-w-lg mx-auto">
          {buttons.map((btn) =>
            btn.onClick ? (
              <button
                key={btn.label}
                onClick={btn.onClick}
                className="min-h-[56px] px-5 py-3 rounded-lg backdrop-blur-xl border border-[hsla(36,95%,80%,0.25)] bg-[hsla(36,95%,80%,0.08)] text-[hsl(36,95%,80%)] text-xs sm:text-[0.7rem] tracking-[0.2em] uppercase font-medium hover:bg-[hsla(36,95%,80%,0.18)] transition-all text-center leading-[1.3] whitespace-normal"
              >
                {btn.label}
              </button>
            ) : (
              <a
                key={btn.label}
                href={btn.href}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[56px] px-5 py-3 rounded-lg backdrop-blur-xl border border-[hsla(36,95%,80%,0.25)] bg-[hsla(36,95%,80%,0.08)] text-[hsl(36,95%,80%)] text-xs sm:text-[0.7rem] tracking-[0.2em] uppercase font-medium hover:bg-[hsla(36,95%,80%,0.18)] transition-all text-center leading-[1.3] whitespace-normal flex items-center justify-center"
              >
                {btn.label}
              </a>
            )
          )}
        </div>

        {/* Copyright */}
        <p className="text-xs text-white/40 text-center">
          Studio 131 © Copyright 2026 — Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;

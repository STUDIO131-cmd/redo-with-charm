import logo from "@/assets/logo-studio131.png";

const FooterSection = () => {
  return (
    <footer className="bg-secondary px-6 py-12 text-center">
      <img src={logo} alt="Studio 131" className="w-24 mx-auto mb-6 opacity-50" />
      <p className="text-muted-foreground text-xs font-body">
        Copyright © 2026 Todos os direitos reservados.
      </p>
      <p className="text-muted-foreground text-xs font-body mt-2">
        Oferecido com muita estratégia por: <span className="font-semibold">STUDIO 131</span>
      </p>
    </footer>
  );
};

export default FooterSection;

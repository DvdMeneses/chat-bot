import React from "react";
import "./Footer.css";
import { NewsletterForm } from "./NewsletterForm/NewsletterForm";
import { FooterMenu } from "./FooterMenu/FooterMenu";
import { SocialLinks } from "./SocialLinks/SocialLinks";
import { Copyright } from "./Copyright/Copyright";

export const Footer = () => {
  const infoMenuItems = [
    { label: "Quem somos", link: "https://www.furia.gg/quem-somos" },
    { label: "FAQ", link: "https://www.furia.gg/faq" },
    { label: "Troca e Devoluções", link: "https://www.furia.gg/trocas-devolucoes" },
    { label: "Formas de pagamento", link: "https://www.furia.gg/formas-pagamento" }
  ];

  const policyMenuItems = [
    { label: "Termos e Condições", link: "https://www.furia.gg/termos-condicoes" },
    { label: "Política de Privacidade", link: "https://www.furia.gg/politica-privacidade" },
    { label: "Política de Cookie", link: "https://www.furia.gg/politica-cookie" }
  ];

  return (
    <footer className="footer">
      <div className="footer__container component__container">
        <div className="footer__row component__row">
          <NewsletterForm />
          <FooterMenu title="Informações" items={infoMenuItems} />
          <FooterMenu title="Políticas" items={policyMenuItems} />
          <SocialLinks />
        </div>
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
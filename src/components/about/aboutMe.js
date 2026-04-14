import React from "react";
import "./AboutMe.scss";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function AboutMe() {
    return (
        <section className="about-me">
            <div className="container">
                <div className="left-side">
                    <img
                        src={process.env.PUBLIC_URL + "/assets/foto_michael.jpeg"}
                        alt="Michael Meneses"
                        className="profile-photo"
                    />
                    <div className="social-links">
                        <a
                            href="https://github.com/Michael-Meneses"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/michael-meneses-b97513268/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/michael-meneses-b97513268/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                        >
                            <FaInstagram />
                        </a>
                    </div>
                </div>
                <div className="right-side">
                    <h2>Sobre mim</h2>
                    <p>
                        Olá! Sou um profissional de T.I com experiência em suporte, infraestrutura e redes, tendo atuado em empresas como Sig@me Informática, iByte e Vila Galé Hotéis, onde fui Analista de T.I Sênior. Também trabalhei no Governo do Estado do Ceará, desenvolvendo disciplina e atuação em ambientes estruturados. Recentemente, concluí um MBA em Cibersegurança e venho me especializando na área com formações como Cisco CCNA e desenvolvimento Full-Stack. Busco oportunidades em Segurança da Informação (Blue Team/SOC, Infra/Cloud e GRC/LGPD), com foco em reduzir riscos e melhorar a segurança dos ambientes.                  </p>

                </div>
            </div>
        </section>
    );
}

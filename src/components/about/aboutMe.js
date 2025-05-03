import React from "react";
import "./AboutMe.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function AboutMe() {
    return (
        <section className="about-me">
            <div className="container">
                <div className="left-side">
                    <img
                        src={process.env.PUBLIC_URL + "/assets/333.png"}
                        alt="David Meneses"
                        className="profile-photo"
                    />
                    <div className="social-links">
                        <a
                            href="https://github.com/DvdMeneses"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="9https://www.linkedin.com/in/david-meneses-9b5157233/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/david-meneses-9b5157233"
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
                        Olá! Meu nome é David Meneses, sou formado em Análise e Desenvolvimento de Sistemas pela UFRN. Sou apaixonado por tecnologia, inovação, criatividade e jogos. Atualmente, atuo no desenvolvimento web e mobile, utilizando tecnologias como Flutter, PHP, JavaScript, React, entre outras. Estou sempre em busca de aprendizado e de contribuir com projetos significativos que gerem impacto positivo!                    </p>

                </div>
            </div>
        </section>
    );
}

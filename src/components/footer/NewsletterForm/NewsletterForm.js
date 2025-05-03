import React from "react";

export const NewsletterForm = () => (
    <div className="footer__newsletter">
        <div className="newsletter__title">
            <span>Seja o primeiro a receber nossos lançamentos e novidades:</span>
        </div>
        <div className="newsletter__form">
            <form className="newsletter-form" id="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                <input
                    type="email"
                    name="email"
                    id="newsletter-form-email"
                    placeholder="Seu e-mail"
                    required
                />
                <button type="submit">
                    <svg
                        fill="none"
                        height="16"
                        viewBox="0 0 16 16"
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clipPath="url(#clip0_2997_6072)">
                            <path
                                d="M2.5 8H13.5"
                                stroke="black"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                            ></path>
                            <path
                                d="M9 3.5L13.5 8L9 12.5"
                                stroke="black"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                            ></path>
                        </g>
                        <defs>
                            <clipPath id="clip0_2997_6072">
                                <rect fill="white" height="16" width="16"></rect>
                            </clipPath>
                        </defs>
                    </svg>
                </button>
            </form>
        </div>
        <div id="alert-newsletter"></div>
    </div>
);
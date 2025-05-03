import React from "react";

export const FooterMenu = ({ title, items }) => (
    <div className="footer__menu">
        <h4 className="menu__title">{title}</h4>
        <ul>
            {items.map((item, index) => (
                <li key={index}>
                    <a href={item.link}>{item.label}</a>
                </li>
            ))}
        </ul>
    </div>
);
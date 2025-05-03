import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="chat-header">
      <img src={process.env.PUBLIC_URL + "/assets/logoText.svg"} alt="Logo do Fúria Bot" />
    </header>
  );
}

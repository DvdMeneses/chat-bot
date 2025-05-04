import React from "react";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <img
        src={process.env.PUBLIC_URL + "/assets/logoText.svg"}
        alt="Logo do Fúria Bot"
        onClick={() => window.location.reload()}
        style={{ cursor: "pointer" }}
      />
    </header>
  );
}

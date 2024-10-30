import logo from "../assets/Estrella_Logo.png";
import React, { useState } from "react";

export default function LoginDialog() {
  const [showContent, setShowContent] = useState(true);
  const toggleContent = () => {
    setShowContent(!showContent);
  };
  return showContent ? (
    <div className="backLogin">
      <div className="contentLogin">
        <img className="login-foto" src={logo} alt="Logo" width={120} />
        <form className="formi">
          <label>Usuario</label>
          <input type="text"></input>
          <label>Contraseña</label>
          <input type="password"></input> <br />
          <button type="submit" onClick={toggleContent} className="addBtn">
            Ingresar
          </button>
        </form>
      </div>
    </div>
  ) : null;
}



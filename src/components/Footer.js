import { useState } from "react";
import "../styles/Footer.css";

function Footer() {
  const [inputValue, setInputValue] = useState("");

  return (
    <footer className="footer">
      <div className="footer-elem">
        Pour les passionné·e·s de plantes 🌿🌱🌵
      </div>
      <div className="footer-elem">Laissez-nous votre mail :</div>
      <input
        type="text"
		placeholder="Entrez votre mail"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onBlur={(e) => checkValue(e.target.value)}
      />
    </footer>
  );
}

function checkValue(value) {
  var regexMail =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!regexMail.test(value)) {
    alert("Attention, ceci n'est pas une adresse valide.");
  }
}

export default Footer;

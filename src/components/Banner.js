import "../styles/Banner.css";
import logo from "../assets/logo.png";

const TITLE = "La maison jungle";

function Banner() {
  return (
    <header className="banner-content">
      <img src={logo} alt="La maison de la jungle" className="banner-logo" />
      <h1 className="banner-title">{TITLE}</h1>
    </header>
  );
}

export default Banner;

import logo from "../../assets/svg/logo.svg"
import "../navbar/style.scss"
import {Clock} from "../clock/index.jsx";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="content">
        <img src={logo} alt="suporte de domigo" className="logo" />

          <div className="pages">
              <a href="">Home</a>
              <a href="">Portifólio</a>
              <a href="">Contato</a>
          </div>
      </div>

      <div className="relogio">
       <Clock/>
      </div>
    </div>
  );
};

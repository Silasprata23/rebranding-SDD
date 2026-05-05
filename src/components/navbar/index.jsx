import logo from "../../assets/image/logo.svg"
import "../navbar/style.scss"

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
        <span>
            05/05  9:15
            {/* o relogio sera dinamico  */}
        </span>
      </div>
    </div>
  );
};

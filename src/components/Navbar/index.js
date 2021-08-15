import { Link } from "react-router-dom";
import image from "../../assets/img/foguete-menor.png";

function Navbar() {
  return (
    <nav className="Navbar">
      <Link
        className="Navbar-brand"
        to="/"
        title="Voltar para pagina principal"
      >
        <img
          className="Navbar-brand__img"
          src={image}
          alt="Ilustração de foguete"
        />
        <span className="Navbar-brand__title">Lançamentos</span>
      </Link>
      <div className="Navbar-links">
        <Link className="Navbar-links__link" to="/">
          Home
        </Link>
        <Link className="Navbar-links__link" to="/proximos-lancamentos">
          Próximos lançamentos
        </Link>
        <Link className="Navbar-links__link" to="/ultimos-lancamentos">
          Últimos lançamento
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

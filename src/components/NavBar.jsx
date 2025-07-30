import CartWidget from './CartWidget';

const NavBar = ({ cartCount }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-3">
      <a className="navbar-brand" href="#">Club del Ciclomotor</a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item"><a className="nav-link" href="#">Inicio</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Repuestos Garelli</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Repuestos Zanella</a></li>
        </ul>
      </div>
      <div className="d-flex">
        <CartWidget cartCount={cartCount} />
      </div>
    </nav>
  );
};

export default NavBar;

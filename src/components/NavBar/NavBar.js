import logo from '../../assets/icons/logo.svg';
import './NavBar.scss';

const NavBar = () => {
  return (
    <nav className="NavBar">
      <div className="NavBar__logo">
        <img src={logo} alt="Logo" />
        <h1>CoffeeCommerce</h1>
      </div>
      <div>
        <input type="text" />
      </div>
      <ul>
        <li>Productos</li>
        <li>Carrito</li>
      </ul>
    </nav>
  );
};

export default NavBar;

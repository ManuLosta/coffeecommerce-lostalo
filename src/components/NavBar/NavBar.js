import logo from '../../assets/icons/logo.svg';
import cartIcon from '../../assets/icons/cart-icon.svg';
import userIcon from '../../assets/icons/user-icon.svg';
import searchIcon from '../../assets/icons/search-icon.svg';
import './NavBar.scss';

const NavBar = () => {
  return (
    <nav className="NavBar">
      <div className="NavBar__left">
        <div className="NavBar__logo">
          <img src={logo} alt="Logo" />
          <h1>CoffeeCommerce</h1>
        </div>

        <ul className="NavBar__links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Productos</a>
          </li>
          <li className="dropdown__container">
            Categorías
            <div className="dropdown">
              <a href="/">Café</a>
              <a href="/">Té</a>
              <a href="/">Cafeteras</a>
              <a href="/">Termos</a>
            </div>
          </li>
        </ul>
      </div>

      <div className="NavBar__right">
        <div className="NavBar__search">
          <img src={searchIcon} alt="Search icon" />
          <input type="text" />
          <button>Buscar</button>
        </div>
        <ul className="NavBar__icons">
          <li>
            <img src={cartIcon} alt="Cart" />
          </li>
          <li>
            <img src={userIcon} alt="Account" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

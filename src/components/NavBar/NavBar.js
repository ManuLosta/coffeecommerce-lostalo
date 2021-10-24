import { useState } from 'react';
import logo from '../../assets/icons/logo.svg';
import searchIcon from '../../assets/icons/search-icon.svg';
import './NavBar.scss';
import Dropdown from './Dropdown';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import { Squash as Hamburger } from 'hamburger-react';

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="NavBar">
      <div className="NavBar__logo">
        <img src={logo} alt="Logo" />
        <h1>CoffeeCommerce</h1>
      </div>
      <div className={`NavBar__content ${isOpen ? 'show' : ''}`}>
        <div className="NavBar__left">
          <Link onClick={() => setOpen(false)} to="/coffeecommerce-lostalo">
            Inicio
          </Link>
          <Link
            onClick={() => setOpen(false)}
            to="/coffeecommerce-lostalo/products"
          >
            Productos
          </Link>
          <Dropdown title="Categorías">
            <Link
              onClick={() => setOpen(false)}
              to="/coffeecommerce-lostalo/cafe"
            >
              Café
            </Link>
            <Link
              onClick={() => setOpen(false)}
              to="/coffeecommerce-lostalo/te"
            >
              Té
            </Link>
            <Link
              onClick={() => setOpen(false)}
              to="coffeecommerce-lostalo/cafeteras"
            >
              Cafeteras
            </Link>
            <Link
              onClick={() => setOpen(false)}
              to="/coffeecommerce-lostalo/termos"
            >
              Termos
            </Link>
          </Dropdown>
        </div>
        <div className="NavBar__search">
          <img src={searchIcon} alt="Search icon" />
          <input type="text" />
          <button>Buscar</button>
        </div>
      </div>

      <CartWidget />
      <Hamburger color="#5E2801" toggled={isOpen} toggle={setOpen} />
    </nav>
  );
};

export default NavBar;

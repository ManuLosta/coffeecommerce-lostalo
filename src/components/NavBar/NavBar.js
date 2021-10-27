import { useState } from 'react';
import logo from '../../assets/icons/logo.svg';
import searchIcon from '../../assets/icons/search-icon.svg';
import './NavBar.scss';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import { Squash as Hamburger } from 'hamburger-react';

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="NavBar">
      <Link to="/" className="NavBar__logo">
        <img src={logo} alt="Logo" />
        <h1>CoffeeCommerce</h1>
      </Link>
      <div className={`NavBar__content ${isOpen ? 'show' : ''}`}>
        <div className="NavBar__left">
          <Link onClick={() => setOpen(false)} to="/category/café">
            Café
          </Link>
          <Link onClick={() => setOpen(false)} to="/category/té">
            Té
          </Link>
          <Link onClick={() => setOpen(false)} to="/cafeteras">
            Cafeteras
          </Link>
          <Link onClick={() => setOpen(false)} to="/accesorios">
            Accesorios
          </Link>
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

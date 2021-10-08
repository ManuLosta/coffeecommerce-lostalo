import { useState } from 'react';
import logo from '../../assets/icons/logo.svg';
import cartIcon from '../../assets/icons/cart-icon.svg';
import searchIcon from '../../assets/icons/search-icon.svg';
import './NavBar.scss';
import Dropdown from './Dropdown';
import NavBarLink from './NavBarLink';
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
          <NavBarLink title="Home" url="/" />
          <NavBarLink title="Productos" url="/" />
          <Dropdown title="Categorías">
            <NavBarLink title="Café" url="/" />
            <NavBarLink title="Té" url="/" />
            <NavBarLink title="Cafeteras" url="/" />
            <NavBarLink title="Termos" url="/" />
          </Dropdown>
        </div>
        <div className="NavBar__search">
          <img src={searchIcon} alt="Search icon" />
          <input type="text" />
          <button>Buscar</button>
        </div>
      </div>
      <ul className="NavBar__icons">
        <li>
          <img src={cartIcon} alt="Cart" />
        </li>
      </ul>
      <Hamburger color="#5E2801" toggled={isOpen} toggle={setOpen} />
    </nav>
  );
};

export default NavBar;

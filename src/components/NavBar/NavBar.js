import { useState } from 'react';
import logo from '../../assets/icons/logo.svg';
import searchIcon from '../../assets/icons/search-icon.svg';
import './NavBar.scss';
import Dropdown from './Dropdown';
import NavBarLink from './NavBarLink';
import CartWidget from './CartWidget';
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
          <NavBarLink title="Home" url="/coffeecommerce-lostalo" />
          <NavBarLink title="Productos" url="/coffeecommerce-lostalo" />
          <Dropdown title="Categorías">
            <NavBarLink title="Café" url="/coffeecommerce-lostalo" />
            <NavBarLink title="Té" url="/coffeecommerce-lostalo" />
            <NavBarLink title="Cafeteras" url="/coffeecommerce-lostalo" />
            <NavBarLink title="Termos" url="/coffeecommerce-lostalo" />
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

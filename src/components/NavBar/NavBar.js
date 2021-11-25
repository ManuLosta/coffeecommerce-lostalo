import { useState } from 'react';
import logo from '../../assets/icons/logo.svg';
import './NavBar.scss';
import Search from '../Search/Search';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import { Squash as Hamburger } from 'hamburger-react';
import UserWidget from '../UserWidget/UserWidget';

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="NavBar">
      <Link to="/" className="NavBar__logo NavBar__link">
        <img src={logo} alt="Logo" />
        <h1>CoffeeCommerce</h1>
      </Link>
      <div className={`NavBar__content ${isOpen ? 'show' : ''}`}>
        <div className="NavBar__left">
          <Link
            className="NavBar__link"
            onClick={() => setOpen(false)}
            to="/category/café"
          >
            Café
          </Link>
          <Link
            className="NavBar__link"
            onClick={() => setOpen(false)}
            to="/category/té"
          >
            Té
          </Link>
          <Link
            className="NavBar__link"
            onClick={() => setOpen(false)}
            to="/category/cafeteras"
          >
            Cafeteras
          </Link>
        </div>
        <Search onSearch={() => setOpen(false)} />
        <UserWidget />
      </div>

      <CartWidget />
      <Hamburger color="#5E2801" toggled={isOpen} toggle={setOpen} />
    </nav>
  );
};

export default NavBar;

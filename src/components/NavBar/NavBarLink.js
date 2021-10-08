import './NavBarLink.scss';

const NavBarLink = ({ url, title }) => {
  return <a href={url}>{title}</a>;
};

export default NavBarLink;

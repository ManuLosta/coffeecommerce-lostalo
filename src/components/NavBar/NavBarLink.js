import './NavBarLink.scss';

const NavBarLink = ({ url, title }) => {
  return (
    <a className="NavBarLink" href={url}>
      {title}
    </a>
  );
};

export default NavBarLink;

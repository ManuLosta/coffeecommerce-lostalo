import { useState } from 'react';
import './Dropdown.scss';

const Dropdown = ({ children, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      onClick={handleClick}
      onMouseLeave={handleLeave}
      className="dropdown__container"
    >
      <p>{title}</p>
      {isOpen ? <div className={`dropdown`}>{children}</div> : null}
    </div>
  );
};

export default Dropdown;

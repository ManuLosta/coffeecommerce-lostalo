import { Link } from 'react-router-dom';
import './ConfirmBox.scss';

const ConfirmBox = ({ message, onCancel, onConfirm }) => {
  return (
    <div className="ConfirmBox__background">
      <div className="ConfirmBox__container">
        <p>{message}</p>
        <div className="ConfirmBox__buttons">
          <button onClick={onCancel}>Cancelar</button>
          <Link to="/cart">Ir al carrito</Link>
          <button onClick={onConfirm}>Agregar</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmBox;

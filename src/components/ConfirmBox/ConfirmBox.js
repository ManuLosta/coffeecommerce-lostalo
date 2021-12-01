import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './ConfirmBox.scss';

const ConfirmBox = ({ message, onCancel, onConfirm }) => {
  return (
    <motion.div
      initial={{ backdropFilter: 'blur(0px)' }}
      animate={{ backdropFilter: 'blur(3px)' }}
      className="ConfirmBox__background"
    >
      <motion.div
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        className="ConfirmBox__container"
      >
        <p>{message}</p>
        <div className="ConfirmBox__buttons">
          <button onClick={onCancel}>Cancelar</button>
          <Link to="/cart">Ir al carrito</Link>
          <button onClick={onConfirm}>Agregar</button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ConfirmBox;

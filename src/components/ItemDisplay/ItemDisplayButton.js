import { motion } from 'framer-motion';

const ItemDisplayButton = ({ isSelected, onClick, color }) => {
  return (
    <li className="" onClick={onClick} style={{ backgroundColor: color }}>
      {isSelected && (
        <motion.div
          layoutId="outline"
          className="outline"
          initial={false}
          animate={{ borderColor: color }}
          transition={spring}
        />
      )}
    </li>
  );
};

const spring = {
  type: 'spring',
  stiffness: 500,
  damping: 30,
};

export default ItemDisplayButton;

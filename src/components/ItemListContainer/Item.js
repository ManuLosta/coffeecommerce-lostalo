import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CartContext } from '../../context/CartContext';
import InCartIcon from '../../assets/icons/incart-icon.svg';

const Item = ({ item }) => {
  const { isInCart } = useContext(CartContext);
  const [imageLoaded, setImageLoaded] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  return (
    <motion.div
      className="Item"
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.1 }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
    >
      <Link to={`/item/${item.id}`}>
        {isInCart(item.id) && (
          <img className="Item__isInCart" src={InCartIcon} alt="In Cart" />
        )}
        <div className="Item__image">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: imageLoaded ? 1 : 0 }}
            onLoad={() => setImageLoaded(true)}
            src={item.imgUrl}
            alt={item.name}
          />
        </div>
        <div className="Item__info">
          <p className="Item__info--name">{item.name}</p>
          <p className="Item__info--price">${item.price.toFixed(2)}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default Item;

import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import Hero from '../components/Hero/Hero';
import ItemDisplay from '../components/ItemDisplay/ItemDisplay';

const Home = () => {
  return (
    <>
      <Hero />
      <ItemDisplay />
      <ItemListContainer allItems={true} />
    </>
  );
};

export default Home;

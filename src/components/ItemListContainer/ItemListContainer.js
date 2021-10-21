import ItemDisplay from './ItemDisplay';
import './ItemListContainer.scss';
import heroImage from '../../assets/images/hero-image.png';
import ItemList from './ItemList';

const ItemListContainer = ({ greeting }) => {
  const items = [
    {
      id: '1',
      name: 'Kilimanjaro Peaberry',
      price: '$21.25',
      imgUrl:
        'https://i.shgcdn.com/f808e05a-17f5-4498-a45d-b5310e5ed79d/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
    },
    {
      id: '2',
      name: 'Yoner Guerrero',
      price: '$22.75 ',
      imgUrl:
        'https://i.shgcdn.com/423bf3b1-8c41-4aac-9cfc-e18a5933385d/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
    },
    {
      id: '3',
      name: 'Streetlevel',
      price: '$17.50',
      imgUrl:
        'https://i.shgcdn.com/28293406-c8de-47b4-9c56-d01252bc868a/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
    },
    {
      id: '4',
      name: 'Githongo',
      price: '$1,050',
      imgUrl:
        'https://i.shgcdn.com/85a86f33-d870-47e6-9abe-e6f19ecf3b55/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
    },
    {
      id: '5',
      name: 'Bronson',
      price: '$16.50',
      imgUrl:
        'https://i.shgcdn.com/626f07c8-8398-46de-9622-2488a4ef8962/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
    },
    {
      id: '6',
      name: 'Granitos de Ortiz',
      price: '$22.00',
      imgUrl:
        'https://i.shgcdn.com/cb87482e-8cc1-45f1-8b95-408b186a8ddb/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
    },
  ];

  return (
    <div className="ItemListContainer">
      <div className="ItemListContainer__landing">
        <div className="Landing__content">
          <h2>{greeting}</h2>
          <p>
            Empezá tu mañana de la mejor forma con un buen café. Elegí alguno de
            nuestro catálogo y disfrutá un sabor único.
          </p>
          <a href="/coffeecommerce-lostalo">Comprar ahora</a>
        </div>
        <img src={heroImage} alt="Hero" />
      </div>
      <ItemDisplay />
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;

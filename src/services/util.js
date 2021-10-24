const items = [
  {
    id: '1',
    category: 'Cafés',
    name: 'Kilimanjaro Peaberry',
    price: '$21.25',
    description:
      'Este café tiene rasgos clásicos de cacao en polvo decadente, seguidos de un cuerpo de regaliz casi negro. Sería genial combinarlo con un cóctel como base.',
    imgUrl:
      'https://i.shgcdn.com/f808e05a-17f5-4498-a45d-b5310e5ed79d/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
    stock: 5,
  },
  {
    id: '2',
    category: 'Cafés',
    name: 'Yoner Guerrero',
    price: '$22.75 ',
    description:
      'No es frecuente que tengamos una oferta peruana en el menú, y este es nuestro primer año llevando café de Yoner Guerrero. Este café ofrece notas de uva blanca crujiente, una leve acidez de nectarina y termina con la dulzura equilibrada de la manzana roja.',
    imgUrl:
      'https://i.shgcdn.com/423bf3b1-8c41-4aac-9cfc-e18a5933385d/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
    stock: 7,
  },
  {
    id: '3',
    category: 'Cafés',
    name: 'Streetlevel',
    price: '$17.50',
    description:
      'Streetlevel es un café que se puede preparar de varias formas y seguir siendo una taza de café clásicamente dulce y equilibrada. Tiene un toque de dulce clementina cítrica y acidez de manzana roja. Eso pasa a un acabado de panal de abeja, que termina con una nota bien redondeada.',
    imgUrl:
      'https://i.shgcdn.com/28293406-c8de-47b4-9c56-d01252bc868a/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
    stock: 4,
  },
  {
    id: '4',
    category: 'Cafés',
    name: 'Githongo',
    price: '$24.25',
    description:
      'Githongo es una oferta sutil para un café de Kenia: la esperada sensación jugosa en la boca está presente, pero tiene notas suaves y florales de cáscara de limón en toda la taza. Su dulzor es de fruta de la pasión tanto en aroma como en perfil de sabor.',
    imgUrl:
      'https://i.shgcdn.com/85a86f33-d870-47e6-9abe-e6f19ecf3b55/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
    stock: 10,
  },
  {
    id: '5',
    category: 'Cafés',
    name: 'Bronson',
    price: '$16.50',
    description:
      'Nuestra versión del French Roast. Disfrute del sedoso chocolate negro y la dulzura del azúcar sin refinar con nuestro tueste más oscuro. Combina bien con crema y azúcar. Cualquiera que disfrute de un café extra atrevido le encantará.',
    imgUrl:
      'https://i.shgcdn.com/626f07c8-8398-46de-9622-2488a4ef8962/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
    stock: 12,
  },
  {
    id: '6',
    category: 'Cafés',
    name: 'Granitos de Ortiz',
    price: '$22.00',
    description:
      'Nos entusiasma el regreso de los cafés costarricenses cada año, ya que tienen una acidez tropical y un sabor vibrante. La oferta de esta temporada de la familia Calderon es una opción versátil para el bebedor de café de todos los días.',
    imgUrl:
      'https://i.shgcdn.com/cb87482e-8cc1-45f1-8b95-408b186a8ddb/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
    stock: 6,
  },
];

export const getItems = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(items);
    }, 2000);
  });
  return promise;
};

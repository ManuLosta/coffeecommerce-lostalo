const items = [
  {
    id: '1',
    category: 'Café',
    name: 'Kilimanjaro Peaberry',
    price: 21.25,
    description:
      'Este café tiene rasgos clásicos de cacao en polvo decadente, seguidos de un cuerpo de regaliz casi negro. Sería genial combinarlo con un cóctel como base.',
    imgUrl:
      'https://i.shgcdn.com/f808e05a-17f5-4498-a45d-b5310e5ed79d/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
    stock: 5,
  },
  {
    id: '2',
    category: 'Café',
    name: 'Yoner Guerrero',
    price: 22.75,
    description:
      'No es frecuente que tengamos una oferta peruana en el menú, y este es nuestro primer año llevando café de Yoner Guerrero. Este café ofrece notas de uva blanca crujiente, una leve acidez de nectarina y termina con la dulzura equilibrada de la manzana roja.',
    imgUrl:
      'https://i.shgcdn.com/423bf3b1-8c41-4aac-9cfc-e18a5933385d/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
    stock: 7,
  },
  {
    id: '3',
    category: 'Café',
    name: 'Streetlevel',
    price: 17.5,
    description:
      'Streetlevel es un café que se puede preparar de varias formas y seguir siendo una taza de café clásicamente dulce y equilibrada. Tiene un toque de dulce clementina cítrica y acidez de manzana roja. Eso pasa a un acabado de panal de abeja, que termina con una nota bien redondeada.',
    imgUrl:
      'https://i.shgcdn.com/28293406-c8de-47b4-9c56-d01252bc868a/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
    stock: 4,
  },
  {
    id: '4',
    category: 'Café',
    name: 'Githongo',
    price: 24.25,
    description:
      'Githongo es una oferta sutil para un café de Kenia: la esperada sensación jugosa en la boca está presente, pero tiene notas suaves y florales de cáscara de limón en toda la taza. Su dulzor es de fruta de la pasión tanto en aroma como en perfil de sabor.',
    imgUrl:
      'https://i.shgcdn.com/85a86f33-d870-47e6-9abe-e6f19ecf3b55/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
    stock: 10,
  },
  {
    id: '5',
    category: 'Café',
    name: 'Bronson',
    price: 16.5,
    description:
      'Nuestra versión del French Roast. Disfrute del sedoso chocolate negro y la dulzura del azúcar sin refinar con nuestro tueste más oscuro. Combina bien con crema y azúcar. Cualquiera que disfrute de un café extra atrevido le encantará.',
    imgUrl:
      'https://i.shgcdn.com/626f07c8-8398-46de-9622-2488a4ef8962/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
    stock: 12,
  },
  {
    id: '6',
    category: 'Café',
    name: 'Granitos de Ortiz',
    price: 22.0,
    description:
      'Nos entusiasma el regreso de los cafés costarricenses cada año, ya que tienen una acidez tropical y un sabor vibrante. La oferta de esta temporada de la familia Calderon es una opción versátil para el bebedor de café de todos los días.',
    imgUrl:
      'https://i.shgcdn.com/cb87482e-8cc1-45f1-8b95-408b186a8ddb/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
    stock: 6,
  },
  {
    id: '7',
    category: 'Té',
    name: 'Ceylon Decaf',
    price: 9.5,
    description:
      'Todo el intenso sabor del té negro de Sri Lanka, sin teína, para un disfrute diario para los amantes del Té Negro.',
    imgUrl:
      'https://dhb3yazwboecu.cloudfront.net/1007//15104_CeylonDecaf_1000X1000_l-.jpg',
    stock: 10,
  },
  {
    id: '8',
    category: 'Té',
    name: 'Thai Mango Black Tea',
    price: 9.95,
    description:
      'Té Negro silvestre y Ecosostenible del norte de Tailandia con el auténtico sabor del mango. Las grandes y oscuras hojas confieren a esta bebida un envolvente y prolongado aroma.',
    imgUrl:
      'https://dhb3yazwboecu.cloudfront.net/1007//72002_ThaiCoconutGreenTea21000X1000_l-.jpg',
    stock: 17,
  },
  {
    id: '9',
    category: 'Té',
    name: 'Rooibos Chai',
    price: 9.5,
    description:
      'Mezcla tonificante e isotónica compuesta por una base de Rooibos y especias al perfecto estilo hindú. Sin teína, esta mezcla chai es especialmente buena infusionada directamente con leche de avena para tomarse tanto en frio como en caliente. Sus ingredientes naturales se aprecian tanto por sus beneficios para la salud como por sus propiedades calmantes.',
    imgUrl:
      'https://dhb3yazwboecu.cloudfront.net/1007/fotosProducto/tes/29111_RooibosChai_1000x1000_l.jpg',
    stock: 17,
  },
  {
    id: '10',
    category: 'Té',
    name: 'Infusión Chamomile & Lemon',
    price: 8.95,
    description:
      'Una digestiva infusión de manzanilla natural con un delicioso y refrescante toque de limón con múltiples propiedades, ideal para los momentos relajantes, por la noche y después de las comidas. ',
    imgUrl:
      'https://dhb3yazwboecu.cloudfront.net/1007//76007_07InfusionChamomileLemon100G_1000X1000_l-.jpg',
    stock: 10,
  },
  {
    id: '11',
    category: 'Té',
    name: 'Té Negro Chocolate',
    price: 6.95,
    description:
      'Té negro con trocitos de chocolate que se funden en la taza y aroma natural de cacao. La dulzura del fruto de los dioses, que se intensifica añadiendo un toque de azúcar.',
    imgUrl:
      'https://dhb3yazwboecu.cloudfront.net/1007/fotosProducto/tes/10103_ChocolateBlackTea_1000x1000_l.jpg',
    stock: 12,
  },
  {
    id: '12',
    category: 'Cafeteras',
    name: 'Bialetti Moka Express',
    price: 50.95,
    description:
      'Con un sabor concentrado y un aroma que se apodera de tu casa, tu café moka es el complemento ideal para cualquier momento del día.',
    imgUrl:
      'https://http2.mlstatic.com/D_NQ_NP_985151-MLA32583466386_102019-O.webp',
    stock: 4,
  },
  {
    id: '13',
    category: 'Cafeteras',
    name: 'Bodum Java Prensa Francesa',
    price: 60.95,
    description:
      'Con un gran prestigio en el mercado de cafeteras Bodum se destaca por la calidad ofrecida en sus productos y una de las más vendidas en el comercio, un negocio familiar que brinda una gran variedad con una experiencia inigualable.',
    imgUrl:
      'https://http2.mlstatic.com/D_NQ_NP_2X_750471-MLA41983912667_052020-F.webp',
    stock: 6,
  },
  {
    id: '14',
    category: 'Cafeteras',
    name: 'Bonavita Connoisseur 8-Cup One-Touch',
    price: 132.25,
    description:
      'The Connoisseur ofrece características seleccionadas que imitan el método de elaboración artesanal de vertido. Originalmente desarrollado para determinar cómo definir mejor la calidad del café, el estándar Golden Cup estableció una relación entre las mediciones objetivas y las preferencias populares para la intensidad ideal del sabor del café y la fuerza de la preparación.',
    imgUrl: 'https://m.media-amazon.com/images/I/71e-fMyCf4L._AC_SL1500_.jpg',
    stock: 3,
  },
  {
    id: '15',
    category: 'Cafeteras',
    name: 'Chemex Pour-Over',
    price: 44.65,
    description:
      'El vertido Chemex permite cubrir y refrigerar el café para recalentarlo sin perder sabor. Como todas las cosas buenas, el sabor pleno requiere tiempo y tu propio toque especial. La cafetera Chemex ofrece solo los elementos esenciales para el rico sabor del café, para que su gusto personal y su enfoque brillen.',
    imgUrl: 'https://m.media-amazon.com/images/I/41puVST2MNL._AC_.jpg',
    stock: 7,
  },
];

export const getItems = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(items.sort((a, b) => 0.5 - Math.random()));
    }, 1500);
  });
  return promise;
};

export const getCategory = category => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(items.filter(item => item.category.toLowerCase() === category));
    }, 500);
  });
  return promise;
};

export const getItem = id => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(items.find(item => item.id === id));
    }, 1000);
  });
  return promise;
};

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

export const getItems = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(items);
    }, 2000);
  });
  return promise;
};

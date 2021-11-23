import React from 'react';
import ContentLoader from 'react-content-loader';

const CartButtonLoader = props => (
  <ContentLoader
    speed={2}
    width={500}
    height={100}
    viewBox="0 0 500 100"
    backgroundColor="#f4ebe5"
    foregroundColor="#fff9f5"
    {...props}
    style={{
      width: '100%',
    }}
  >
    <rect x="13" y="0" rx="0" ry="0" width="218" height="15" />
    <rect x="377" y="0" rx="0" ry="0" width="113" height="15" />
    <rect x="13" y="25" rx="8" ry="8" width="480" height="50" />
  </ContentLoader>
);

export default CartButtonLoader;

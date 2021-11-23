import ContentLoader from 'react-content-loader';

const CartLoader = props => (
  <ContentLoader
    speed={2}
    width={800}
    height={160}
    viewBox="0 0 800 160"
    backgroundColor="#f4ebe5"
    foregroundColor="#fff9f5"
    {...props}
    style={{
      width: '100%',
    }}
  >
    <rect x="0" y="0" rx="20" ry="20" width="800" height="120" />
  </ContentLoader>
);

export default CartLoader;

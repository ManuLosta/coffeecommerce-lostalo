import { useEffect } from 'react';
import ContentLoader from 'react-content-loader';

const Loader = props => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <ContentLoader
      speed={2}
      width={400}
      height={400}
      viewBox="0 0 400 500"
      backgroundColor="#f4ebe5"
      foregroundColor="#fff9f5"
      {...props}
      style={{ width: '25%', minWidth: '300px', maxWidth: '400px' }}
    >
      <rect x="10" y="380" rx="11" ry="11" width="268" height="30" />
      <rect x="10" y="422" rx="11" ry="11" width="218" height="30" />
      <rect x="10" y="18" rx="20" ry="20" width="350" height="350" />
    </ContentLoader>
  );
};

export default Loader;

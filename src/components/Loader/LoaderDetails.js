import { useEffect } from 'react';
import ContentLoader from 'react-content-loader';

const LoaderDetails = props => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        flexWrap: 'wrap',
      }}
    >
      <ContentLoader
        speed={2}
        width={400}
        height={400}
        viewBox="0 0 400 400"
        backgroundColor="#f4ebe5"
        foregroundColor="#fff9f5"
        {...props}
      >
        <rect x="0" y="0" rx="20" ry="20" width="400" height="400" />
      </ContentLoader>
      <ContentLoader
        speed={2}
        width={385}
        height={300}
        viewBox="0 0 385 300"
        backgroundColor="#f4ebe5"
        foregroundColor="#fff9f5"
        {...props}
      >
        <rect x="0" y="54" rx="12" ry="12" width="385" height="51" />
        <rect x="0" y="123" rx="12" ry="12" width="385" height="97" />
        <rect x="0" y="241" rx="12" ry="12" width="219" height="45" />
      </ContentLoader>
    </div>
  );
};

export default LoaderDetails;

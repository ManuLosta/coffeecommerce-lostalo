import ContentLoader from 'react-content-loader';

const Loader = props => (
  <ContentLoader
    speed={2}
    width={400}
    height={500}
    viewBox="0 0 400 500"
    backgroundColor="#f4ebe5"
    foregroundColor="#fff9f5"
    {...props}
  >
    <rect x="17" y="375" rx="11" ry="11" width="268" height="30" />
    <rect x="19" y="422" rx="11" ry="11" width="218" height="29" />
    <rect x="11" y="18" rx="20" ry="20" width="358" height="344" />
  </ContentLoader>
);

export default Loader;

import ContentLoader from 'react-content-loader';

const LoaderDisplay = props => (
  <ContentLoader
    speed={2}
    width={1000}
    height={700}
    viewBox="0 0 1000 700"
    backgroundColor="#f4ebe5"
    foregroundColor="#fff9f5"
    {...props}
    style={{
      display: 'flex',
      flexWrap: 'wrap',
    }}
  >
    <rect x="548" y="40" rx="12" ry="12" width="385" height="51" />
    <rect x="552" y="110" rx="12" ry="12" width="385" height="97" />
    <rect x="553" y="233" rx="12" ry="12" width="219" height="45" />
    <rect x="35" y="39" rx="12" ry="12" width="385" height="642" />
    <circle cx="481" cy="82" r="27" />
    <circle cx="492" cy="91" r="6" />
    <circle cx="482" cy="152" r="27" />
    <circle cx="483" cy="225" r="27" />
    <circle cx="485" cy="296" r="27" />
  </ContentLoader>
);

export default LoaderDisplay;

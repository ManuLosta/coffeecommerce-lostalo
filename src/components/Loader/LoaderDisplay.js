import ContentLoader from 'react-content-loader';

const LoaderDisplay = props => (
  <div
    style={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row',
      flexWrap: 'wrap',
    }}
  >
    <ContentLoader
      speed={2}
      width={550}
      height={650}
      viewBox="0 0 550 650"
      backgroundColor="#f4ebe5"
      foregroundColor="#fff9f5"
      {...props}
    >
      <rect x="35" y="39" rx="12" ry="12" width="385" height="600" />
      <circle cx="481" cy="82" r="27" />
      <circle cx="492" cy="91" r="6" />
      <circle cx="482" cy="152" r="27" />
      <circle cx="483" cy="225" r="27" />
      <circle cx="485" cy="296" r="27" />
    </ContentLoader>
    <ContentLoader
      speed={2}
      width={600}
      height={300}
      viewBox="0 0 600 300"
      backgroundColor="#f4ebe5"
      foregroundColor="#fff9f5"
      {...props}
    >
      <rect x="20" y="40" rx="12" ry="12" width="385" height="51" />
      <rect x="20" y="110" rx="12" ry="12" width="385" height="97" />
      <rect x="20" y="233" rx="12" ry="12" width="219" height="45" />
    </ContentLoader>
  </div>
);

export default LoaderDisplay;

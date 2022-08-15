import { RotatingLines } from 'react-loader-spinner';

export const Loader = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <RotatingLines
      strokeColor="grey"
      strokeWidth="5"
      animationDuration="0.75"
      width="50"
      visible={true}
    />
  </div>
);

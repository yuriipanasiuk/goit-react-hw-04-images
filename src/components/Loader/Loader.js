import { TailSpin } from 'react-loader-spinner';

const Loader = ({ visible }) => {
  return (
    <TailSpin
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{ justifyContent: 'center' }}
      wrapperClass=""
      visible={visible}
    />
  );
};

export default Loader;

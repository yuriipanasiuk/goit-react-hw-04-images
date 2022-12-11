import { ThreeDots } from 'react-loader-spinner';

interface IProps {
  visible: boolean;
}

const Loader = ({ visible }: IProps) => {
  return (
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="red"
      ariaLabel="three-dots-loading"
      wrapperStyle={{ justifyContent: 'center' }}
      visible={visible}
    />
  );
};

export default Loader;

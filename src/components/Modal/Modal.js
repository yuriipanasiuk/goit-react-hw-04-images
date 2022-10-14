import { StyledModal, Backdrop } from './Modal.styled';

const Modal = ({ image, name }) => {
  return (
    <>
      <Backdrop>
        <StyledModal>
          <img src={image} alt={name} />
        </StyledModal>
      </Backdrop>
    </>
  );
};

export default Modal;

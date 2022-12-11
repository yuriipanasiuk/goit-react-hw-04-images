import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { StyledModal, Backdrop } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root') as HTMLElement;

interface IComponentProps {
  children: JSX.Element;
  onClick: () => void;
}

interface IHandleKeyDown {
  code: string;
}

interface IhandleBackdropClick {
  target: object;
  currentTarget: object;
}

export default function Modal({ children, onClick }: IComponentProps) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = ({ code }: IHandleKeyDown) => {
    if (code === 'Escape') {
      onClick();
    }
  };

  const handleBackdropClick = ({
    target,
    currentTarget,
  }: IhandleBackdropClick) => {
    if (target === currentTarget) {
      onClick();
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <StyledModal>{children}</StyledModal>
    </Backdrop>,
    modalRoot
  );
}

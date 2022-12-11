import { StyledButton } from './Button.styled';

interface IProps {
  children: string;
  onClick: () => void;
  type: 'button';
}

const Button = ({ type, children, onClick }: IProps) => (
  <StyledButton type={type} onClick={onClick}>
    {children}
  </StyledButton>
);

export default Button;

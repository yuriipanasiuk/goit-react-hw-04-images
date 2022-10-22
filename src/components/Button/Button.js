import { StyledButton } from './Button.styled';

const Button = ({ type = 'button', children, onClick }) => (
  <StyledButton type={type} onClick={onClick}>
    {children}
  </StyledButton>
);

export default Button;

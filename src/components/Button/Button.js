import { StyledButton } from './Button.styled';

const Button = ({ type = 'button', children }) => {
  return <StyledButton type={type}>{children}</StyledButton>;
};

export default Button;

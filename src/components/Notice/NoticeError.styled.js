import styled from 'styled-components';

export const StyledError = styled.p`
  font-size: ${p => p.theme.fontSizes.xl};
  color: ${p => p.theme.colors.error};
  text-transform: uppercase;
  font-weight: ${p => p.theme.fontWeight.bold};
`;

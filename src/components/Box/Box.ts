import {
  color,
  ColorProps,
  space,
  SpaceProps,
  layout,
  LayoutProps,
  shadow,
  ShadowProps,
  border,
  BorderProps,
  flexbox,
  FlexboxProps,
  grid,
  GridProps,
  position,
  PositionProps,
  typography,
  TypographyProps,
} from 'styled-system';
import styled from 'styled-components';

interface IProps
  extends ColorProps,
    SpaceProps,
    LayoutProps,
    ShadowProps,
    BorderProps,
    FlexboxProps,
    GridProps,
    PositionProps,
    TypographyProps {
  children: React.ReactNode;
}

const Box = styled.div<IProps>`
  ${color};
  ${space};
  ${layout};
  ${shadow};
  ${border};
  ${flexbox};
  ${grid};
  ${position};
  ${typography};
`;

export default Box;

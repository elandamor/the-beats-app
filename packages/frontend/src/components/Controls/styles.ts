import Button from '@app/components/Button';
import styled from 'styled-components';
import { borders, color, size, space, StyledSystemProps } from 'styled-system';

export const PlayPauseButton = styled(Button)<StyledSystemProps>`
  ${borders};
  ${color};
  ${size};
  ${space};
  background: ${({ theme }) =>
    theme.isDark ? theme.colors.whites[3] : theme.colors.blacks[3]};

  &.-play i {
    margin-left: 1px;
  }

  i svg {
    fill: ${({ theme }) =>
      theme.isDark ? theme.colors.white : theme.colors.black};
  }
`;

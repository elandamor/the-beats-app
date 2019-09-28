import Flex from '@app/components/Flex';
import theme from '@app/theme';
import styled from 'styled-components';

export const Wrapper = styled(Flex)`
  backdrop-filter: saturate(50%) blur(20px);
  min-height: 64px;
  position: relative;
  width: 100%;

  &::before {
    background-color: ${theme.colors.surface};
    backdrop-filter: saturate(50%) blur(20px);
    content: '';
    height: 100%;
    left: 0;
    opacity: 0.875;
    position: absolute;
    width: 100%;
  }

  .c-nowPlaying {
    flex-basis: 100%;
    overflow: hidden;

    .c-details {
      .a-name {
        font-size: ${theme.fontSizes[3]}px;
      }

      .c-artists {
        font-size: ${theme.fontSizes[2]}px;
        margin-bottom: ${theme.space[1]}px;
      }
    }
  }
`;

export const OnDeck = styled(Flex)`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100%;
`;

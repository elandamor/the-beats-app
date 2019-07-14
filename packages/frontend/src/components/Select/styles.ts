import styled from 'styled-components';
import { space } from 'styled-system';
import theme from '../../theme';

const Wrapper = styled.div`
  ${space};
  font-size: ${theme.fontSizes[1]}px;
  font-weight: 400;
  width: 100%;

  .c-select__control {
    border: ${theme.borders[1]} #aaaaaa;
    box-shadow: none;

    &:focus,
    &:hover {
      border: ${theme.borders[1]} ${theme.colors.primary};
      outline: none;
    }
  }

  .c-select__single-value {
    color: ${({ theme }) => theme.colors.text};
  }

  .c-select__input input {
    min-height: auto;
  }

  .c-select__indicator-separator {
    display: none;
  }

  .c-select__menu {
    z-index: 2;
  }
`;

export default Wrapper;

import styled from 'styled-components';

const Wrapper = styled.nav`
  a {
    position: relative;
    width: 100%;

    &.-active {
      &::before,
      &::after {
        content: '';
        left: 0;
        position: absolute;
      }

      &::before {
        background-color: ${({ theme }) =>
          theme.isDark ? theme.colors.whites[1] : theme.colors.blacks[1]};
        height: 100%;
        top: 0;
        width: 100%;
      }

      &::after {
        background-color: ${({ theme }) =>
          theme.isDark ? theme.colors.whites[4] : theme.colors.blacks[4]};
        border-radius: 100%;
        bottom: 4px;
        height: 8px;
        margin: 0 auto;
        right: 0;
        width: 8px;
      }
    }
  }
`;

export default Wrapper;

export {};

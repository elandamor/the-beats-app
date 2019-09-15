import styled from 'styled-components';

const Wrapper = styled.nav`
  a {
    position: relative;
    width: 100%;

    &.-active {
      &::after {
        content: '';
        left: 0;
        position: absolute;
      }

      &::after {
        background-color: ${({ theme }) =>
          theme.isDark ? theme.colors.whites[4] : theme.colors.blacks[4]};
        /* border-radius: 100%; */
        bottom: 0;
        height: 8px;
        margin: 0 auto;
        right: 0;
        width: 80%;
      }
    }
  }
`;

export default Wrapper;

export {};

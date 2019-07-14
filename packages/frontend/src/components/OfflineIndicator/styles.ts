import styled from 'styled-components';

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  height: 64px;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  width: 64px;

  svg {
    color: ${({ theme }) =>
      theme.isDark ? theme.colors.whites[4] : theme.colors.blacks[4]};
    height: 24px;
    width: 24px;
  }
`;

export default Wrapper;

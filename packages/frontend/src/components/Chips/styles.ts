import styled from 'styled-components';
import theme from '../../theme';

const Wrapper = styled.div`
  align-items: center;
  background: transparent;
  border: ${theme.borders[1]} #aaaaaa;
  border-radius: ${theme.space[1] / 2}px;
  display: flex;
  font-size: ${theme.fontSizes[2]}px;
  overflow-x: auto;
  overflow-y: hidden;
  padding-left: ${theme.space[1] + theme.space[1] / 2}px;
  position: relative;
  z-index: 1;

  input {
    background: transparent;
    border: none;
    flex-basis: 100%;
    font-size: ${theme.fontSizes[2]}px;
    min-width: 280px;
    padding: ${theme.space[2]}px ${theme.space[1] + theme.space[1] / 2}px
      ${theme.space[2]}px 0;

    &:focus,
    &:hover {
      border: none;
      outline: none;
    }
  }
`;

export default Wrapper;

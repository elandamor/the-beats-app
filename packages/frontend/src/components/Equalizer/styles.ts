import styled , { keyframes } from 'styled-components';

const bounce = keyframes`
  0% {
    transform: translateY(100%)
  }

  50% {
      transform: translateY(0%)
  }

  100% {
      transform: translateY(100%)
  }
`;

const Wrapper = styled.div`
  align-items: center;
  background-color: hsla(0, 0%, 96%, 0.85);
  border-radius: 3px;
  display: flex;
  height: 40px;
  justify-content: center;
  position: absolute;
  transition: opacity .195s ease-in;
  width: 40px;
  will-change: opacity;

  &.-paused {
    opacity: 0;

    div::after,
    div::before {
      animation-play-state: paused;
    }
  }
`;

export const Bar1 = styled.div`
  display: flex;
  height: 9px;
  margin: 0 1px;
  overflow: hidden;

  &::after,
  &::before {
    background-color: #000000;
    content: '';
    display: block;
    height: 100%;
    width: 3px;

    animation: ${bounce} 0.75s ease-in infinite;
    transform: translateY(100%);
    will-change: transform;
  }

  &::before {
    animation: ${bounce} 0.895s ease-in-out infinite;
    margin-right: 2px;
  }
`;

export const Bar2 = styled(Bar1)`
  &::after,
  &::before {
    animation: ${bounce} 1s ease-in-out infinite;
    transform: translateY(100%);
  }

  &::before {
    animation: ${bounce} 1.125s ease-out infinite;
    margin-right: 2px;
  }
`;

export default Wrapper;

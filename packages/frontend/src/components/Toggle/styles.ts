import styled from 'styled-components';
import { theme } from '@app/theme';

export const Wrapper = styled.div`
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-touch-callout: none;
  cursor: pointer;
  display: inline-block;
  margin: ${theme.space[2]}px;
  position: relative;
  user-select: none;

  .react-toggle-screenreader-only {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  .react-toggle-track {
    width: 48px;
    height: 24px;
    padding: 0;
    border-radius: 30px;
    background-color: ${({ theme }) => theme.colors.background};
  }

  .react-toggle-track-check,
  .react-toggle-track-x {
    position: absolute;
    width: 16px;
    height: 16px;
    top: 0px;
    bottom: 0px;
    margin-top: auto;
    margin-bottom: auto;
  }

  .react-toggle-track-check {
    left: 5px;
    opacity: 0;
  }

  .react-toggle-track-x {
    right: 5px;
    opacity: 1;
  }

  &.-checked .react-toggle-track-check {
    opacity: 1;
  }

  &.-checked .react-toggle-track-x {
    opacity: 0;
  }

  .react-toggle-thumb {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.text};
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    transform: translateX(0);
  }

  &.-checked .react-toggle-thumb {
    transform: translateX(24px);
  }
`;

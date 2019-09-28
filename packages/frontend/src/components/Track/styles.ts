import styled from 'styled-components';
import theme from '../../theme';
import { ITrackProps } from './index';

const Wrapper = styled.div`
  align-items: center;
  border-radius: 4px;
  color: #555;
  display: flex;
  font-size: ${theme.fontSizes[1]}px;
  list-style-type: none;
  padding: 8px 12px;
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100%;

  .a-trackNumber {
    flex: none;
    font-size: ${theme.fontSizes[2]}px;
    padding: 0 12px;
    text-align: left;
    width: 40px;
  }

  .c-cover__wrapper {
    background-color: ${(props) => props.theme.colors.cardBorderColor};
    border-radius: 4px;
    flex: none;
    height: ${({ coverSize }: ITrackProps) => coverSize || '40'}px;
    margin-right: 12px;
    overflow: hidden;
    transition: transform 0.195s ease-out;
    width: ${({ coverSize }: ITrackProps) => coverSize || '40'}px;
  }

  img {
    flex: none;
  }

  .c-details {
    cursor: pointer;
    flex-basis: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    z-index: 1;
  }

  .a-name {
    color: ${theme.colors.black};
    font-size: ${theme.fontSizes[3]}px;
  }

  .c-artists {
    font-size: ${theme.fontSizes[2]}px;
    margin-top: ${theme.space[1]}px;
  }

  .a-artist {
    display: inline;
    pointer-events: none;
  }

  .c-btn--collect {
    border-radius: 100%;
    height: 40px;
    overflow: hidden;
  }

  &:after,
  &:before {
    content: '';
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 0;
  }

  &.-current {
    .c-cover__wrapper {
      transform: scale(0.9);
    }
  }
`;

export const Duration = styled.div`
  color: ${theme.colors.blacks[5]};
  flex: none;
  font-size: ${theme.fontSizes[1]}px;
`;

export default Wrapper;

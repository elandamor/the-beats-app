import styled from 'styled-components';
import theme from '../../theme';
import { Flex } from '../../components';

const Wrapper = styled.div``;

export const Tracks = styled.ul`
  margin: 0;
  padding: 0;

  border: thin solid ${(props) => props.theme.colors.cardBorderColor};
  border-radius: 4px;
  min-height: 40px;
`;

export const EditableTrack = styled(Flex)`
  border-bottom: thin solid ${(props) => props.theme.colors.cardBorderColor};

  .c-track {
    flex-basis: 100%;
    padding-left: ${theme.space[1]}px;
  }

  .c-btn {
    flex: none;
  }

  &:last-child {
    border: none;
  }
`;

export const TrackForm = styled(Flex)`
  border: ${theme.borders[1]} #aaaaaa;
  border-radius: 4px;

  .c-input__wrapper {
    margin: 0;

    input {
      border: none;
      border-radius: 0;
    }

    &:first-child input {
      border-radius: 4px 0 0 4px;
    }
  }
`;

export default Wrapper;

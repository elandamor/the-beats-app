import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { StyledSystemProps } from 'styled-system';
import Measure from 'react-measure';

import Box from '../Box';

// import { makeDebugger } from '@app/utils';
// const debug = makeDebugger('ScrollView');

export interface IScrollViewProps extends StyledSystemProps {}

/**
 * @render react
 * @name ScrollView component
 * @description ScrollView component.
 * @example
 * <ScrollView />
 */

const Wrapper = styled(Box)`
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
`;

const ScrollView: FC<IScrollViewProps> = ({ children, ...rest }) => {
  const [contentHeight, setContentHeight] = useState<number>(-1);
  const [wrapperHeight, setWrapperHeight] = useState<number>(-1);

  const isOverflowing = contentHeight > wrapperHeight;

  return (
    <Measure
      bounds
      onResize={(rect) => {
        setWrapperHeight(rect.bounds!.height);
      }}
    >
      {({ measureRef: wrapperRef }) => (
        <Wrapper
          {...rest}
          ref={wrapperRef}
          justifyContent={isOverflowing ? 'flex-start' : rest.justifyContent}
        >
          <Measure
            bounds
            onResize={(rect) => {
              setContentHeight(rect.bounds!.height);
            }}
          >
            {({ measureRef: contentRef }) => (
              <div ref={contentRef}>{children}</div>
            )}
          </Measure>
        </Wrapper>
      )}
    </Measure>
  );
};

ScrollView.defaultProps = {
  height: '100%',
  overflow: 'auto',
  width: '100%',
  zIndex: 0,
};

export default ScrollView;

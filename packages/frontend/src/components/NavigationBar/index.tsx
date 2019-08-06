import React, { FC } from 'react';
import Box, { IBoxProps } from '../Box';
import Navigation, { INavigationProps } from '../Navigation';

interface INavigationBarProps extends IBoxProps, INavigationProps {}

/**
 * @render react
 * @name NavigationBar component
 * @description NavigationBar component.
 * @example
 * <NavigationBar />
 */

const NavigationBar: FC<INavigationBarProps> = (props) => {
  return (
    <Box flex="none" {...props}>
      <Navigation height={props.height} links={props.links} />
    </Box>
  );
};

NavigationBar.defaultProps = {
  bg: 'surface',
};

export default NavigationBar;

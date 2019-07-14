import React, { FC } from 'react';
// Styles
import Box, { IBoxProps } from '../Box';
import Inner from '../Inner';
import Flex from '../Flex';
import GoBackButton from '../GoBackButton/Loadable';
import Toggle from '../Toggle/Loadable';

import { useTheme, useRouter } from '@app/hooks';
import { generic } from '@app/assets';

// import { makeDebugger } from '@app/utils';
// const debug = makeDebugger('Header');

interface IHeaderProps extends IBoxProps {}

/**
 * @render react
 * @name Header component
 * @description Header component.
 * @example
 * <Header />
 */

const Header: FC<IHeaderProps> = (props) => {
  const { location } = useRouter();
  const { darkMode, setDarkMode } = useTheme();

  const showBackButton = location.state && location.state.showBackButton;

  const handleSetDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    // @ts-ignore
    <Box as="header" flex="none" {...props}>
      <Inner as={Flex}>
        <Flex alignItems="center">
          <GoBackButton show={showBackButton} />
        </Flex>
        <Flex alignItems="center" justifyContent="flex-end">
          <Toggle
            icons={{
              checked: (
                <img
                  src={generic.moon}
                  width="16"
                  height="16"
                  role="presentation"
                  style={{ pointerEvents: 'none' }}
                />
              ),
              unchecked: (
                <img
                  src={generic.sun}
                  width="16"
                  height="16"
                  role="presentation"
                  style={{ pointerEvents: 'none' }}
                />
              ),
            }}
            checked={darkMode}
            onChange={handleSetDarkMode}
          />
        </Flex>
      </Inner>
    </Box>
  );
};

Header.defaultProps = {
  bg: 'surface',
  height: [64, 88],
};

export default Header;

import { generic } from '@app/assets';
import { useCurrentRoute, useRouter, useTheme } from '@app/hooks';
import { H1 } from '@app/typography';
import { makeDebugger } from '@app/utils';
import React, { FC } from 'react';
// Styles
import Box, { IBoxProps } from '../Box';
import Flex from '../Flex';
import GoBackButton from '../GoBackButton/Loadable';
import Inner from '../Inner';
import Toggle from '../Toggle/Loadable';

const debug = makeDebugger('Header');

interface IHeaderProps extends IBoxProps {}

/**
 * @render react
 * @name Header component
 * @description Header component.
 * @example
 * <Header />
 */

const Header: FC<IHeaderProps> = ({ ...props }) => {
  const { location } = useRouter();
  const { darkMode, setDarkMode } = useTheme();
  const { currentRoute } = useCurrentRoute();

  const showBackButton =
    currentRoute.isSubRoute ||
    (location.state && location.state.showBackButton);

  const handleSetDarkMode = () => {
    setDarkMode(!darkMode);
  };

  debug({ currentRoute });

  return (
    <Box as="header" flex="none" {...props}>
      <Inner as={Flex}>
        <Flex alignItems="center">
          <GoBackButton show={showBackButton} />
        </Flex>
        <Flex alignItems="center" justifyContent="center">
          <H1 fontSize={[4, 5]}>{currentRoute.title}</H1>
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

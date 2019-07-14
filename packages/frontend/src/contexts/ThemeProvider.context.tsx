import React, { FC } from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import get from 'lodash/get';
import merge from 'lodash/merge';

import baseTheme from '@app/theme';
// Direct import 'useDarkMode' to avoid circular dependency.
import useDarkMode from '@app/hooks/useDarkMode';

interface IThemeProvider {
  children: React.ReactChild;
}

const DEFAULT_STATE = {
  darkMode: false,
  setDarkMode: (mode: boolean) => null,
};

export const ThemeContext = React.createContext(DEFAULT_STATE);

const ThemeProvider: FC<IThemeProvider> = ({ children }) => {
  const [darkMode, setDarkMode] = useDarkMode();

  // Merge the color mode with the base theme to create a new theme object
  const getTheme = (mode: string) =>
    merge({}, baseTheme, {
      colors: get(baseTheme.colors.modes, mode, baseTheme.colors),
      isDark: true,
    });

  const theme = darkMode ? getTheme('dark') : baseTheme;

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <SCThemeProvider theme={theme}>{children}</SCThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

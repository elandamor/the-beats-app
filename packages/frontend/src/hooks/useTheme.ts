import React from 'react';
import { ThemeContext } from '@app/contexts/ThemeProvider.context';

export default function useTheme() {
  const context = React.useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
}

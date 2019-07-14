import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    isDark?: boolean;
    borders: any[];
    breakpoints: string[];
    colors: {
      [key: string]: any;
      blacks: string[];
      whites: string[];
    };
    fonts: {
      sansSerif: string;
    };
    fontSizes: number[];
    fontWeights: number[];
    letterSpacings: number[];
    maxWidths: number[];
    minWidths: number[];
    space: number[];
  }
}

import React from 'react';
import { create } from 'jss';
import rtl from 'jss-rtl';
import {
  unstable_createMuiStrictModeTheme as createMuiTheme,
  ThemeProvider,
  StylesProvider,
  jssPreset
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'fontsource-roboto';

import Colors from '../config/Colors';
import TajawalFont from '../assets/fonts/tajawal.woff2';

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const theme = createMuiTheme({
  direction: "rtl",
  palette: {
    primary: {
      main: Colors.primary,
      contrastText: Colors.white,
    },
    secondary: {
      main: Colors.white,
    },
    error: {
      main: Colors.red,
    },
  },
  typography: {
    fontFamily: "Tajawal, Arial",
  },
  overrides: {
    MuiGrid: {
      container: {
        width: "100% !important",
      },
    },
    MuiCssBaseline: {
      "@global": {
        "@font-face": [
          {
            fontFamily: "Tajawal",
            fontStyle: "normal",
            fontDisplay: "swap",
            fontWeight: 400,
            src: `
              local('Tajawal'),
              local('Tajawal-Regular'),
              url(${TajawalFont}) format('woff2')
            `,
            unicodeRange:
              "U+0600-06FF, U+200C-200E, U+2010-2011, U+204F, U+2E41, U+FB50-FDFF, U+FE80-FEFC",
          },
        ],
      },
    },
  },
});

type Props = {
  children: React.ReactNode;
};

const RightToLeftTheme: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <StylesProvider jss={jss}>
        <CssBaseline />
        {children}
      </StylesProvider>
    </ThemeProvider>
  );
};

export default RightToLeftTheme;
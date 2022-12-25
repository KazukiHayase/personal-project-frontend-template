import { createTheme, responsiveFontSizes } from '@mui/material';

export const theme = responsiveFontSizes(
  createTheme({
    // palette: {
    //   primary: {
    //     light: '',
    //     main: '',
    //     dark: '',
    //   },
    // },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            margin: 0,
            padding: 0,
            boxSizing: 'border-box',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
          },
          '.itemImageManageModalDragItem': {
            zIndex: 1300,
            opacity: '0.7',
          },
          a: {
            textDecoration: 'none',
          },
        },
      },
    },
    typography: {
      h1: {
        fontSize: '2.2rem',
        fontWeight: 'bold',
      },
      h2: {
        fontSize: '1.6rem',
        fontWeight: 'bold',
      },
      h3: {
        fontSize: '1.4rem',
        fontWeight: 'bold',
      },
      h4: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
      },
    },
  }),
);

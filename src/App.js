import * as React from 'react';
import { ThemeProvider, createTheme } from '@material-ui/core';

export default function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#f44336',
      },
      secondary: {
        main: '#3f51b5',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div>

      </div>
    </ThemeProvider>
  );
};

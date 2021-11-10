import * as React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';

import Home from './components/Home'

const useStyles = makeStyles({
  root: {
  },
});



function App() {

  let theme = createTheme({
    palette: {
      primary: {
        main: '#f44336',
      },
      secondary: {
        main: '#065fd4',
      },
    },
  });

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
     <Home />
    </ThemeProvider>
  );
}

export default App;

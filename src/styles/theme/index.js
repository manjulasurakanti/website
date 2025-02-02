import { createTheme , colors } from '@material-ui/core';
import shadows from './shadows';
import typography from './typography';

const theme = createTheme({
  palette: {
    background: {
      dark: '#F4F6F8',
      default: colors.common.white,
      paper: colors.common.white
    },
    primary: {
      main: '#6962ff'
    },
    secondary: {
      main: colors.orange[600]
    },
    neutral: {
      main:  colors.common.white,
    },
    text: {
      primary: '#6962ff',//colors.blueGrey[900],
      secondary: colors.blueGrey[600]
    }
  },
  shadows,
  typography
});

export default theme;

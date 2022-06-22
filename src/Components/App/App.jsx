import { Homepage } from '../../Pages/Homepage';
import { CssBaseline, ThemeProvider } from '@mui/material';
import darkTheme from '../../Resources/dark';

export const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Homepage />
    </ThemeProvider>
  );
};

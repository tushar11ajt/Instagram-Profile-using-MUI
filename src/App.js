import './App.css';
import { createTheme, CssBaseline, Grid, ThemeProvider } from '@mui/material'

import AsideBar from './Components/AsideBar';
import ContentMainPage from './Components/ContentMainPage';
import { createContext, memo,  useState } from 'react';

export const ThemeSelection = createContext();
export const ThemeChecker = createContext();

function App() {
  
  const themes2 = createTheme({
    palette: {
      mode: 'light'
    }
  })
  console.log('App . js')

  const [themeState, setThemeState] = useState(themes2);

  return (
    <ThemeSelection.Provider value={setThemeState}>
      <ThemeChecker.Provider value={themeState}>

        <ThemeProvider theme={(themeState)}>
          <CssBaseline />
          <Grid container>

            <Grid item sx={{display:{sm:'none',md:"block"}}} lg={2} md={2}  >
              <AsideBar />
            </Grid>



            <Grid item lg={10} md={10} sm={12} xs={12}>
              <ContentMainPage />
            </Grid>

          </Grid>
        </ThemeProvider>
      </ThemeChecker.Provider>
    </ThemeSelection.Provider>
  );
}

export default memo(App);

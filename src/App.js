import { createTheme, ThemeProvider } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import NavigationMenu from './components/navigation_menu/NavigationMenu'
import RouteHandler from './RouteHandler'

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ['Josefin Sans', 'sans-serif'].join(','),
    },
  })
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <NavigationMenu />
          <RouteHandler />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  )
}

export default App

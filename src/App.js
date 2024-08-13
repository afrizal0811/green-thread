import { BrowserRouter } from 'react-router-dom'
import NavigationMenu from './components/navigation_menu/NavigationMenu'
import RouteHandler from './RouteHandler'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavigationMenu />
        <RouteHandler />
      </BrowserRouter>
    </div>
  )
}

export default App

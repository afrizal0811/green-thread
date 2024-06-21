import { BrowserRouter } from 'react-router-dom'
import RouteHandler from './RouteHandler'
import NavigationMenu from './components/navigation_menu/NavigationMenu'
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

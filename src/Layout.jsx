import React from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Footer from './components/footer/Footer'
import NavigationMenu from './components/navigation_menu/NavigationMenu'

const Layout = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const context = {
    navigate,
    pathname,
  }

  return (
    <div>
      <NavigationMenu context={context} />
      <Outlet context={context} />
      <Footer context={context} />
    </div>
  )
}

export default Layout

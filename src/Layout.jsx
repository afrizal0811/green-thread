import React from 'react'
import { Outlet } from 'react-router-dom'
import NavigationMenu from './components/navigation_menu/NavigationMenu'
const Layout = (props) => (
  <NavigationMenu {...props}>
    <Outlet />
  </NavigationMenu>
)

export default Layout

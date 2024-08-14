import React from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { StyledBox, StyledDivider } from './StyledComponents'
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
    <NavigationMenu
      navigate={navigate}
      pathname={pathname}
    >
      <Outlet context={context} />
      <StyledBox
        display='flex'
        justifyContent='center'
      >
        <StyledDivider />
      </StyledBox>
      <Footer />
    </NavigationMenu>
  )
}

export default Layout

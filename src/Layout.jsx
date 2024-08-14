import React from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { Divider } from './components/material_ui'
import Footer from './components/footer/Footer'
import NavigationMenu from './components/navigation_menu/NavigationMenu'
const Layout = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const styles = {
    dividerWrapper: {
      marginTop: '50px',
      display: 'flex',
      justifyContent: 'center',
    },
    divider: {
      borderBottomWidth: '1px',
      borderColor: 'black',
      width: '80%',
    },
  }

  return (
    <NavigationMenu
      navigate={navigate}
      pathname={pathname}
    >
      <Outlet />
      <div style={styles.dividerWrapper}>
        <Divider sx={styles.divider} />
      </div>
      <Footer />
    </NavigationMenu>
  )
}

export default Layout

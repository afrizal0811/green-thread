import Divider from '@mui/material/Divider'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/footer/Footer'
import NavigationMenu from './components/navigation_menu/NavigationMenu'

const Layout = (props) => {
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
    <NavigationMenu {...props}>
      <Outlet />
      <div style={styles.dividerWrapper}>
        <Divider sx={styles.divider} />
      </div>
      <Footer />
    </NavigationMenu>
  )
}

export default Layout

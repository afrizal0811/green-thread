import MenuIcon from '@mui/icons-material/Menu'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import React, { useState } from 'react'
import { pagesLink } from '../../constants/lists'
import BrandLogo from '../brand_logo/BrandLogo'
import {
  Box,
  Container,
  Divider,
  Menu,
  MenuItem,
  Tooltip,
} from '../material_ui'
import {
  StyledAppBar,
  StyledAvatar,
  StyledAvatarIcon,
  StyledUserMenu,
} from './StyledComponents'
import { pageMenu, settings, userMenu } from './help'

const NavigationMenu = (props) => {
  const { children, context } = props
  const { navigate, pathname } = context
  const [anchorElNav, setAnchorElNav] = useState(null)
  const [anchorElUser, setAnchorElUser] = useState(null)
  const isHome = pathname === '/'

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const handlePageChange = (page) => {
    navigate(`/${page}`)
  }

  const renderBrandLogo = (isXs) => (
    <BrandLogo
      display={isXs ? 'none' : 'flex'}
      flexGrow={!isXs ? 1 : 0}
      fontSize={{ xs: '26px', sm: '32px' }}
      imageHeight={{ xs: 40, sm: 50 }}
      imageWidth={{ xs: 40, sm: 50 }}
      navigate={navigate}
    />
  )

  const mappedPages = pagesLink.map((page) => (
    <MenuItem
      isHome={isHome}
      key={page}
      onClick={() => handlePageChange(page)}
      selected={pathname === `/${page}`}
      text={page}
      textAlign='center'
    />
  ))

  const mappedUserSettings = settings.map((setting) => (
    <MenuItem
      key={setting}
      onClick={handleCloseUserMenu}
      text={setting}
      textAlign='center'
    />
  ))

  const renderPagesTray = (
    <Box display={{ xs: 'flex', md: 'none' }}>
      <IconButton
        size='large'
        onClick={handleOpenNavMenu}
        color='inherit'
      >
        <MenuIcon />
      </IconButton>
      <Menu
        anchorEl={anchorElNav}
        anchorOrigin={pageMenu.anchorOrigin}
        display={{ xs: 'block', md: 'none' }}
        id='menu-appbar'
        keepMounted
        onClose={handleCloseNavMenu}
        open={Boolean(anchorElNav)}
        transformOrigin={pageMenu.transformOrigin}
      >
        {mappedPages}
      </Menu>
    </Box>
  )
  const renderPageMenu = (
    <Box
      flexGrow={{ xs: 1, md: 0 }}
      display={{ xs: 'none', md: 'flex' }}
    >
      {mappedPages}
    </Box>
  )

  const renderUserMenu = (
    <Box>
      <Tooltip title='User Options'>
        <StyledAvatarIcon onClick={handleOpenUserMenu}>
          <StyledAvatar alt='Remy Sharp' />
        </StyledAvatarIcon>
      </Tooltip>
      <StyledUserMenu
        anchorEl={anchorElUser}
        anchorOrigin={userMenu.anchorOrigin}
        id='menu-appbar'
        keepMounted
        onClose={handleCloseUserMenu}
        open={Boolean(anchorElUser)}
        transformOrigin={userMenu.transformOrigin}
      >
        <MenuItem
          key='username'
          onClick={handleCloseUserMenu}
          text='Remy Sharp'
          textAlign='center'
        />
        <Divider />
        {mappedUserSettings}
      </StyledUserMenu>
    </Box>
  )

  return (
    <Box>
      <StyledAppBar $isHome={isHome}>
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            {renderBrandLogo(true)}
            {renderBrandLogo(false)}
            {renderPagesTray}
            {renderPageMenu}
            {renderUserMenu}
          </Toolbar>
        </Container>
      </StyledAppBar>
      {children}
    </Box>
  )
}

export default NavigationMenu

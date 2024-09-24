import MenuIcon from '@mui/icons-material/Menu'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import React, { useState } from 'react'
import { pagesLink } from '../../constants/lists'
import BrandLogo from '../brand_logo/BrandLogo'
import {
  Avatar,
  Box,
  Container,
  Divider,
  Menu,
  MenuItem,
  Tooltip,
} from '../material_ui'
import { StyledAppBar } from './StyledComponents'
import { heroPages, pageMenu, settings, userMenu } from './help'

const NavigationMenu = (props) => {
  const { children, context } = props
  const { navigate, pathname } = context
  const [anchorElNav, setAnchorElNav] = useState(null)
  const [anchorElUser, setAnchorElUser] = useState(null)
  const isHasHeroImage = heroPages.includes(pathname)

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
      isHasHeroImage={isHasHeroImage}
      key={page}
      onClick={() => handlePageChange(page.toLocaleLowerCase())}
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
        <IconButton
          className='flex gap-3'
          onClick={handleOpenUserMenu}
        >
          <Avatar
            alt='Remy Sharp'
            className='!w-6 !h-6'
          />
        </IconButton>
      </Tooltip>
      <Menu
        className='mt-11'
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
      </Menu>
    </Box>
  )

  return (
    <Box>
      <StyledAppBar $isHasHeroImage={isHasHeroImage}>
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

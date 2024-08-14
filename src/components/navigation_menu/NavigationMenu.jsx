import MenuIcon from '@mui/icons-material/Menu'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import imagePath from '../../constants/imagePaths'
import pagesLink from '../../constants/pagesLink'
import pageConvertor from '../../utilities/pageConvertor'

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
  StyledLogo,
  StyledLogoText,
  StyledUserMenu,
} from './StyledComponents'
import { pageMenu, settings, userMenu } from './help'

const NavigationMenu = (props) => {
  const { children } = props
  const navigate = useNavigate()
  const [anchorElNav, setAnchorElNav] = useState(null)
  const [anchorElUser, setAnchorElUser] = useState(null)

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
    navigate(`/${pageConvertor(page)}`)
  }

  const renderLogo = (isXs) => (
    <Box
      display={isXs ? 'none' : 'flex'}
      alignItems='center'
      flexGrow={!isXs && 1}
    >
      <StyledLogo
        src={imagePath.logo}
        alt='logo'
        width={50}
        height={50}
      />
      <StyledLogoText
        variant='h5'
        component='p'
      >
        Green Threads
      </StyledLogoText>
    </Box>
  )

  const mappedPages = pagesLink.map((page) => (
    <MenuItem
      key={page}
      onClick={() => handlePageChange(page)}
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
    <Box
      flexGrow={{ xs: 1, md: 0 }}
      display={{ xs: 'flex', md: 'none' }}
    >
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
      <StyledAppBar position='static'>
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            {renderLogo(true)}
            {renderPagesTray}
            {renderLogo(false)}
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

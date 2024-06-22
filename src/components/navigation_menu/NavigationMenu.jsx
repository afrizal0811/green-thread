import MenuIcon from '@mui/icons-material/Menu'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import imagePath from '../../constants/imagePaths'
import { Box, Container, Divider, MenuItem, Tooltip } from '../material_ui'
import {
  StyledAppBar,
  StyledAvatar,
  StyledAvatarIcon,
  StyledLogo,
  StyledLogoBox,
  StyledLogoText,
  StyledPageBox,
  StyledPagesTrayMenu,
  StyledUserMenu,
} from './StyledComponents'
import { pageMenu, pages, settings, userMenu } from './help'
const NavigationMenu = () => {
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
    const newPage = page === 'Home' ? '' : page
    navigate(`/${newPage}`)
  }
  const renderLogo = (isXs) => (
    <StyledLogoBox $isXs={isXs}>
      <StyledLogo
        src={imagePath.logo}
        alt='logo'
        width={50}
        height={50}
      />
      <StyledLogoText
        variant='h6'
        noWrap
        component='p'
      >
        Green Threads
      </StyledLogoText>
    </StyledLogoBox>
  )

  const mappedPages = pages.map((page) => (
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
    <StyledPageBox $isXs={true}>
      <IconButton
        size='large'
        onClick={handleOpenNavMenu}
        color='inherit'
      >
        <MenuIcon />
      </IconButton>
      <StyledPagesTrayMenu
        anchorEl={anchorElNav}
        anchorOrigin={pageMenu.anchorOrigin}
        id='menu-appbar'
        keepMounted
        onClose={handleCloseNavMenu}
        open={Boolean(anchorElNav)}
        transformOrigin={pageMenu.transformOrigin}
      >
        {mappedPages}
      </StyledPagesTrayMenu>
    </StyledPageBox>
  )
  const renderPageMenu = (
    <StyledPageBox $isXs={false}>{mappedPages}</StyledPageBox>
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
  )
}

export default NavigationMenu

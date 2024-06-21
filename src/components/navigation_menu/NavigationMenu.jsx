import MenuIcon from '@mui/icons-material/Menu'
import AppBar from '@mui/material/AppBar'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Toolbar from '@mui/material/Toolbar'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import imagePath from '../../constants/imagePaths'
import { StyledLogo } from './StyledComponents'
import { pageMenu, pages, userMenu } from './help'
const NavigationMenu = () => {
  const settings = ['Profile', 'Dashboard', 'Logout']
  const navigate = useNavigate()
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)

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
    <Box
      sx={{
        flexGrow: !isXs && 1,
        display: { xs: isXs ? 'none' : 'flex', md: !isXs ? 'flex' : 'none' },
        alignItems: 'center',
      }}
    >
      <StyledLogo
        src={imagePath.logo}
        alt='logo'
        width={50}
        height={50}
      />
      <Typography
        variant='h5'
        noWrap
        component='a'
        sx={{
          color: 'inherit',
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          mr: 2,
          textDecoration: 'none',
        }}
      >
        Green Threads
      </Typography>
    </Box>
  )

  const mappedPages = pages.map((page) => (
    <MenuItem
      key={page}
      onClick={() => handlePageChange(page)}
    >
      <Typography textAlign='center'>{page}</Typography>
    </MenuItem>
  ))

  const mappedUserSettings = settings.map((setting) => (
    <MenuItem
      key={setting}
      onClick={handleCloseUserMenu}
    >
      <Typography textAlign='center'>{setting}</Typography>
    </MenuItem>
  ))

  const renderPagesTray = (
    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
        id='menu-appbar'
        keepMounted
        onClose={handleCloseNavMenu}
        open={Boolean(anchorElNav)}
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
        transformOrigin={pageMenu.transformOrigin}
      >
        {mappedPages}
      </Menu>
    </Box>
  )
  const renderPageMenu = (
    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>{mappedPages}</Box>
  )

  const renderUserMenu = (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title='User Options'>
        <IconButton
          onClick={handleOpenUserMenu}
          sx={{ display: 'flex', gap: '10px' }}
        >
          <Avatar
            alt='Remy Sharp'
            sx={{ width: 24, height: 24 }}
          />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorElUser}
        anchorOrigin={userMenu.anchorOrigin}
        id='menu-appbar'
        keepMounted
        onClose={handleCloseUserMenu}
        open={Boolean(anchorElUser)}
        sx={{ mt: '45px' }}
        transformOrigin={userMenu.transformOrigin}
      >
        <MenuItem
          key='username'
          onClick={handleCloseUserMenu}
        >
          <Typography textAlign='center'>Remy Sharp</Typography>
        </MenuItem>
        <Divider />
        {mappedUserSettings}
      </Menu>
    </Box>
  )

  return (
    <AppBar
      position='static'
      sx={{
        background: 'transparent',
        boxShadow: 'none',
        position: 'absolute',
        zIndex: '100',
      }}
    >
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          {renderLogo(true)}
          {renderPagesTray}
          {renderLogo(false)}
          {renderPageMenu}
          {renderUserMenu}
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default NavigationMenu

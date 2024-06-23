import AppBar from '@mui/material/AppBar'
import IconButton from '@mui/material/IconButton'
import { styled as muiStyled } from '@mui/material/styles'
import styled from 'styled-components'
import { Avatar, Image, Menu, Typography } from '../material_ui'

export const StyledLogo = styled(Image)`
  margin-right: 10px;
`
export const StyledAppBar = muiStyled(AppBar)`
  background: transparent;
  box-shadow: none;
  position: absolute;
  z-index: 100;
`
export const StyledUserMenu = muiStyled(Menu)`
  margin-top: 45px;
`
export const StyledLogoText = muiStyled(Typography)`
  color: inherit;
  fontWeight: 700;
  margin-top: 10px;
`
export const StyledAvatarIcon = muiStyled(IconButton)`
  display: flex; 
  gap: 10px;
`
export const StyledAvatar = muiStyled(Avatar)`
  width: 24px; 
  height: 24px;
`

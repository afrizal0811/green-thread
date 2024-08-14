import AppBar from '@mui/material/AppBar'
import IconButton from '@mui/material/IconButton'
import { styled as muiStyled } from '@mui/material/styles'
import { Avatar, Menu } from '../material_ui'

export const StyledAppBar = muiStyled(AppBar)`
  background: transparent;
  box-shadow: none;
  color: white;
  position: absolute;
  z-index: 100;
  ${(props) =>
    !props.$isHome &&
    `
    color: black;
    position: static;
  `}
`
export const StyledUserMenu = muiStyled(Menu)`
  margin-top: 45px;
`
export const StyledAvatarIcon = muiStyled(IconButton)`
  display: flex; 
  gap: 10px;
`
export const StyledAvatar = muiStyled(Avatar)`
  width: 24px; 
  height: 24px;
`

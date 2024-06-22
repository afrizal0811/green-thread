import AppBar from '@mui/material/AppBar'
import IconButton from '@mui/material/IconButton'
import { styled as muiStyled } from '@mui/material/styles'
import styled from 'styled-components'
import Image from '../../components/image/Image'
import muiBreakpoints from '../../utilities/muiBreakpoints'
import { Avatar, Box, Menu, Typography } from '../material_ui'

export const StyledLogo = styled(Image)`
  margin-right: 10px;
`
export const StyledAppBar = muiStyled(AppBar)`
  background: transparent;
  box-shadow: none;
  position: absolute;
  z-index: 100;
`
export const StyledLogoBox = muiStyled(Box)`
  flex-grow: ${({ $isXs }) => !$isXs && 1};
  display: ${({ $isXs }) => (!$isXs ? 'flex' : 'none')};
  align-items: center;
`
export const StyledPageBox = muiStyled(Box)`
  flex-grow: ${({ $isXs }) => $isXs && 1};
  ${(props) => muiBreakpoints(props, 'xs')} {
    display: ${({ $isXs }) => ($isXs ? 'flex' : 'none')};
  }
  ${(props) => muiBreakpoints(props, 'md')} {
    display: ${({ $isXs }) => ($isXs ? 'none' : 'flex')};
  }
`
export const StyledPagesTrayMenu = muiStyled(Menu)`
  ${(props) => muiBreakpoints(props, 'xs')} {
      display: block;
    }
  ${(props) => muiBreakpoints(props, 'md')} {
      display: none;
    }
`
export const StyledUserMenu = muiStyled(Menu)`
  margin-top: 45px;
`
export const StyledLogoText = muiStyled(Typography)`
  color: inherit;
  fontWeight: 700;
`
export const StyledAvatarIcon = muiStyled(IconButton)`
  display: flex; 
  gap: 10px;
`
export const StyledAvatar = muiStyled(Avatar)`
  width: 24px; 
  height: 24px;
`

import AppBar from '@mui/material/AppBar'
import { styled as muiStyled } from '@mui/material/styles'

export const StyledAppBar = muiStyled(AppBar)`
  background: transparent;
  box-shadow: none;
  color: white;
  position: absolute;
  z-index: 100;
  ${(props) =>
    !props.$isHasHeroImage &&
    `
    color: black;
    position: static;
  `}
`

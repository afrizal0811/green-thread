import { styled as muiStyled } from '@mui/material'
import { Box, Divider, Button } from './components/material_ui'
import colors from './constants/colors'

export const StyledBox = muiStyled(Box)`
    margin-top: 50px;
`

export const StyledDivider = muiStyled(Divider)`
    border-bottom-width: 1px;
    border-color: black;
    width: 80%;
`

export const StyledButton = muiStyled(Button)`
  background-color: ${colors.maize};
  color: black;
  font-weight: 700;
  padding: 10px;
  &:hover {
    background-color: ${colors.yellowOrange};
  }
`
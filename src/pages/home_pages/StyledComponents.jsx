import { styled as muiStyled } from '@mui/material'
import styled from 'styled-components'
import { Button } from '../../components/material_ui'
import colors from '../../constants/colors'

export const StyledTitle = styled.span`
  color: ${colors.forestGreen};
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

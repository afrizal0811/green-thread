import { styled as muiStyled } from '@mui/material'
import { Box } from '../../components/material_ui'
import colors from '../../constants/colors'
import { StyledButton } from '../../StyledComponents'

export const StyledWrapper = muiStyled(Box)`
  height: 100vh;
  color: ${colors.black};
`
export const StyledBackButton = muiStyled(StyledButton)`
  border-radius: 50px;
  width: 150px;
`
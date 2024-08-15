import { styled as muiStyled } from '@mui/material'
import { Box, Image } from '../../../../components/material_ui'
import colors from '../../../../constants/colors'
import muiBreakpoints from '../../../../utilities/muiBreakpoints'

export const StyledImageListWrapper = muiStyled(Box)`
  ${(props) => muiBreakpoints(props, 'xs')} {
    display: flex;
  }
    ${(props) => muiBreakpoints(props, 'sm')} {
    display: none;
  }
`

export const StyledImageWrapper = muiStyled(Box)`
  width: 100%;
  margin: 0 20px;
  ${(props) => muiBreakpoints(props, 'xs')} {
    display: none;
  }
  ${(props) => muiBreakpoints(props, 'sm')} {
    display: flex;
  }
`
export const StyledImage = muiStyled(Image)`
  object-fit: cover;
  width: 300px;
  height: 300px;
  border-radius: 10px;
  
`
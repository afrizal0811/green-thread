import { styled as muiStyled } from '@mui/material'
import { Box, Image } from '../../../../components/material_ui'
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
  filter: drop-shadow( ${(props) =>
    props.$isEven ? `10px` : `-10px`} 10px 10px rgba(0, 0, 0, 0.25));
  object-fit: cover;
  width: 300px;
  height: 300px;
  border-radius: 10px;
  
`

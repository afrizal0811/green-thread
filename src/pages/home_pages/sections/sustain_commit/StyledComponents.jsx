import { styled as muiStyled } from '@mui/material'
import { Box } from '../../../../components/material_ui'
import colors from '../../../../constants/colors'
import muiBreakpoints from '../../../../utilities/muiBreakpoints'

export const StyledIconWrapper = muiStyled(Box)`
  ${(props) => muiBreakpoints(props, 'xs')} {
    display: none;
  }
    ${(props) => muiBreakpoints(props, 'sm')} {
    display: flex;
  }
`
export const StyledImageWrapper = muiStyled(Box)`
  ${(props) => muiBreakpoints(props, 'xs')} {
    display: flex;
  }
  ${(props) => muiBreakpoints(props, 'sm')} {
    display: none;
  }
`
export const StyledIconContent = muiStyled(Box)`
  align-items: center;
  background: white;
  border-radius: 50%;
  display: flex;
  height: 150px;
  justify-content: center;
  width: 150px;
  border: 5px solid ${(props) =>
    props.$id % 2 === 0 ? colors.maize : colors.yellowOrange};
`

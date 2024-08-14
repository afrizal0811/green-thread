import { styled as muiStyled } from '@mui/material'
import { Box } from '../../../../components/material_ui'
import muiBreakpoints from '../../../../utilities/muiBreakpoints'
import { StyledButton } from '../../StyledComponents'
export const StyledProductsWrapper = muiStyled(Box)`
  background: radial-gradient(circle, rgba(24,97,24,1) 40%, rgba(34,139,34,1) 100%);
  // margin-top: 30px;
  padding: 50px 0;
    ${(props) => muiBreakpoints(props, 'md')} {
    margin-top: 30px;
  }
`
export const StyledFeaturedButton = muiStyled(StyledButton)`
  font-size: 18px;
  height: 50px;
  margin-top: 20px;
  padding-bottom: 5px;
  padding: 10px;
  width: 200px;
`

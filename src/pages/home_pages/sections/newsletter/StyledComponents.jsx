import { styled as muiStyled } from '@mui/material'
import { StyledButton, StyledInput } from '../../../../StyledComponents'
import { Box } from '../../../../components/material_ui'
import muiBreakpoints from '../../../../utilities/muiBreakpoints'

export const StyledNewsletterWrapper = muiStyled(Box)`
  margin: 20px 0;
`
export const StyledNewsletterContent = muiStyled(Box)`
  background: 
    linear-gradient(to left bottom, transparent 50%, rgba(0,0,0,.4) 0) no-repeat 100% 0 / 3em 3em,
    linear-gradient(-135deg, transparent 2.125em, rgba(24,97,24,1) 0);
  color: white;
  border-radius: 10px;
  padding: 30px;
  width: 80%;
  ${(props) => muiBreakpoints(props, 'sm')} {
    width: 70%;
  }
`
export const StyledSubsInput = muiStyled(StyledInput)`
  width: 100%;
  ${(props) => muiBreakpoints(props, 'sm')} {
    width: 70%;
  }
`
export const StyledSubsButton = muiStyled(StyledButton)`
  border-radius: 25px;
  font-size: 16px;
`

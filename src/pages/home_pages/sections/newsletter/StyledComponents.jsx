import { styled as muiStyled } from '@mui/material'
import { Box, Input } from '../../../../components/material_ui'
import muiBreakpoints from '../../../../utilities/muiBreakpoints'
import { StyledButton } from '../../../../StyledComponents'

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
export const StyledSubsInput = muiStyled(Input)`
  width: 100%;
  ${(props) => muiBreakpoints(props, 'sm')} {
    width: 70%;
  }
  .MuiInputBase-root, .MuiInputLabel-root, input {
    color: black;
  }
  .MuiInputBase-root, input {
    border-radius: 50px;
    &:before {
      border-bottom-color: transparent !important;
    }
    &:after {
      border-bottom-color: transparent !important;
    }
  }

  input {
    background: rgba(255,255,255,0.5);
    &:focus {
      background: rgba(255,255,255,0.7);
      border: none;
    }
  }
`
export const StyledSubsButton = muiStyled(StyledButton)`
  border-radius: 50px;
  font-size: 16px;
`

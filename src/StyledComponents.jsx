import { styled as muiStyled } from '@mui/material'
import { Button, Input } from './components/material_ui'
import colors from './constants/colors'

export const StyledButton = muiStyled(Button)`
  background-color: ${colors.maize};
  color: black;
  font-weight: 700;
  padding: 10px;
  transition-duration: 0.2s;
  &:hover {
    background-color: ${colors.yellowOrange};
  }
`

export const StyledInput = muiStyled(Input)`
  .MuiInputBase-root, .MuiInputLabel-root, input {
    color: black;
  }

  .MuiInputBase-root, input {
    border-radius: 25px;
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

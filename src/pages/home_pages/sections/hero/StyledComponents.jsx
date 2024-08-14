import { styled as muiStyled } from '@mui/material'
import styled from 'styled-components'
import { Box } from '../../../../components/material_ui'
import muiBreakpoints from '../../../../utilities/muiBreakpoints'
import { StyledButton } from '../../../../StyledComponents'

export const StyledHeroImage = styled.div`
  border-bottom-left-radius: 50% 25%;
  border-bottom-right-radius: 50% 25%;
  height: 80vh; /* 50vh for the square + 25vh for the half-circle */
  overflow: hidden;
  position: absolute;
  width: 100%;
  background: url(${(props) => props.$src && props.$src}) no-repeat center 15% /
    cover;
  filter: brightness(80%);
  z-index: -1;
`
export const StyledHeroWrapper = muiStyled(Box)`
  color: white;
  height: 80vh;
  ${(props) => muiBreakpoints(props, 'xs')} {
    margin-left: 0;
  }
  ${(props) => muiBreakpoints(props, 'md')} {
    margin-left: 20px;
  }
`
export const StyledHeroButton = muiStyled(StyledButton)`
  width: 130px;
`

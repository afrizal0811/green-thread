import { styled as muiStyled } from '@mui/material'
import styled from 'styled-components'
import { Box, Button } from '../../components/material_ui'
import colors from '../../constants/colors'
import muiBreakpoints from '../../utilities/muiBreakpoints'

// =============== HERO ==========================
export const StyledHeroImage = styled.div`
  position: absolute;
  width: 100vw; /* Half the width of the viewport */
  height: 80vh; /* 50vh for the square + 25vh for the half-circle */
  border-bottom-left-radius: 50% 25%;
  border-bottom-right-radius: 50% 25%;
  overflow: hidden;
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

export const StyledHeroDetail = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const StyledHeroButton = muiStyled(Button)`
  width: 130px;
  padding: 10px;
  padding-bottom: 5px;
  background-color: ${colors.forestGreen};
  &:hover {
    background-color: ${colors.forestGreenDark};
  }
`

// =============== ABOUT ==========================

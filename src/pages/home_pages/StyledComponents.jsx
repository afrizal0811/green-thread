import { styled as muiStyled } from '@mui/material'
import styled from 'styled-components'
import { Box, Button } from '../../components/material_ui'
import colors from '../../constants/colors'
import muiBreakpoints from '../../utilities/muiBreakpoints'

// =============== HERO ==========================
export const StyledHeroImage = styled.div`
  position: absolute;
  width: 100%;
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
export const StyledHeroButton = muiStyled(Button)`
  width: 130px;
  padding: 10px;
  padding-bottom: 5px;
  background-color: ${colors.forestGreen};
  &:hover {
    background-color: ${colors.forestGreenDark};
  }
`

// =============== FEATURED PRODUCTS ==========================

export const StyledProductsWrapper = muiStyled(Box)`
  background: radial-gradient(circle, rgba(34,139,34,1) 60%, rgba(24,97,24,1) 100%);
  padding: 50px 0;
  margin-top: 30px;
`
// =============== Sustainability Commitment ==========================
export const StyledIconWrapper = muiStyled(Box)`
  align-items: center;
  background: white;
  border-radius: 50%;
  display: flex;
  height: 150px;
  justify-content: center;
  margin-top: 20px;
  width: 150px;
`
// =============== Review ==========================
export const StyledReview = muiStyled(Box)`
  background: white;
  padding: 20px;
  width: 300px;
  height: 300px;
  margin-top: -50px;
  padding-top: 40px;
  border-radius: 10px;
`
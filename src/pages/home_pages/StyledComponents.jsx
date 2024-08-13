import { styled as muiStyled } from '@mui/material'
import styled from 'styled-components'
import { Box, Button, Image } from '../../components/material_ui'
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
  color: black;
  font-weight: 700;
  background-color: ${colors.maize};
  &:hover {
    background-color: ${colors.darkTangerine};
  }
`
// =============== ABOUT PRODUCTS ==========================

export const StyledImage = muiStyled(Image)`
  padding: 0 10px;
  border-radius: 25px;
  
`

// =============== FEATURED PRODUCTS ==========================

export const StyledProductsWrapper = muiStyled(Box)`
  background: radial-gradient(circle, rgba(34,139,34,1) 60%, rgba(24,97,24,1) 100%);
  padding: 50px 0;
  margin-top: 30px;
`
export const StyledFeaturedButton = muiStyled(Button)`
  width: 200px;
  height: 50px;
  padding: 10px;
  padding-bottom: 5px;
  margin-top: 20px;
  color: black;
  font-weight: 700;
  font-size: 18px;
  background-color: ${colors.maize};
  &:hover {
    background-color: ${colors.darkTangerine};
  }
`
// =============== Sustainability Commitment ==========================
export const StyledIconWrapper = muiStyled(Box)`
  align-items: center;
  background: white;
  border-radius: 50%;
  display: flex;
  height: 150px;
  justify-content: center;
  width: 150px;
  border: 5px solid ${(props) =>
    props.$id % 2 === 0 ? colors.maize : colors.darkTangerine};
`
// =============== Review ==========================
export const StyledReview = muiStyled(Box)`
  background: white;
  border-radius: 10px;
  height: 350px;
  margin-top: -50px;
  padding-top: 40px;
  padding: 20px;
  width: 300px;
`

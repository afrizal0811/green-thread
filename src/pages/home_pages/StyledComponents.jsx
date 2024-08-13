import { styled as muiStyled } from '@mui/material'
import styled from 'styled-components'
import { Box, Button, Image, Input } from '../../components/material_ui'
import colors from '../../constants/colors'
import muiBreakpoints from '../../utilities/muiBreakpoints'

// =============== PUBLIC ==========================
export const StyledColoredTitle = styled.span`
  color: ${colors.forestGreen};
`
// =============== HERO ==========================
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
export const StyledHeroButton = muiStyled(Button)`
  background-color: ${colors.maize};
  color: black;
  font-weight: 700;
  padding-bottom: 5px;
  padding: 10px;
  width: 130px;
  &:hover {
    background-color: ${colors.yellowOrange};
  }
`
// =============== ABOUT PRODUCTS ==========================

export const StyledImage = muiStyled(Image)`
  border-radius: 25px;
  padding: 0 10px;
`

// =============== FEATURED PRODUCTS ==========================

export const StyledProductsWrapper = muiStyled(Box)`
  background: radial-gradient(circle, rgba(24,97,24,1) 40%, rgba(34,139,34,1) 100%);
  // margin-top: 30px;
  padding: 50px 0;
    ${(props) => muiBreakpoints(props, 'md')} {
    margin-top: 30px;
  }
`
export const StyledFeaturedButton = muiStyled(Button)`
  background-color: ${colors.maize};
  color: black;
  font-size: 18px;
  font-weight: 700;
  height: 50px;
  margin-top: 20px;
  padding-bottom: 5px;
  padding: 10px;
  width: 200px;
  &:hover {
    background-color: ${colors.yellowOrange};
  }
`
// =============== Sustainability Commitment ==========================
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
// =============== Review ==========================
export const StyledReviewrapper = muiStyled(Box)`
  filter: drop-shadow(15px 10px 10px rgba(0, 0, 0, 0.25));
  margin-bottom: 30px;
`
export const StyledReview = muiStyled(Box)`
  background: white;
  border-radius: 10px;
  height: 350px;
  margin-top: -50px;
  padding: 50px 20px 20px;
  width: 300px;
`
// =============== Newsletter ==========================
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
    width: 90%;
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
export const StyledSubsButton = muiStyled(Button)`
  background-color: ${colors.maize};
  border-radius: 50px;
  color: black;
  font-size: 16px;
  font-weight: 700;
  margin-top: 20px;
  padding-bottom: 5px;
  padding: 10px;
  &:hover {
    background-color: ${colors.yellowOrange};
  }`

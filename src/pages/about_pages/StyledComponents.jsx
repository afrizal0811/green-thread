import { styled as muiStyled } from '@mui/material'
import { Box, Image } from '../../components/material_ui'
import colors from '../../constants/colors'
import muiBreakpoints from '../../utilities/muiBreakpoints'
export const StyledPortrait = muiStyled(Image)`
  object-fit: cover;
  width: 300px;
  height: 350px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  ${(props) => muiBreakpoints(props, 'md')} {
    width: 200px;
    height: 250px;
  }

  ${(props) => muiBreakpoints(props, 'lg')} {
    width: 300px;
    height: 350px;
  }
`
export const StyledOfficeImage = muiStyled(Image)`
    -webkit-mask-image:-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0.1)));
    mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));
    width: 100%;
`
export const StyledIcon = muiStyled(Image)`
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
    aspect-ratio: 1 / 1;
    object-fit: scale-down;
`
export const StyledCoreWrapper = muiStyled(Box)`
  & > * {
      flex: 1 1 40%;
  }
`

export const StyledIconWrapper = muiStyled(Box)`
  background: ${colors.white};
  padding: 50px;
`

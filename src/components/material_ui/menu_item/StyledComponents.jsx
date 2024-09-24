import { styled as muiStyled } from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import colors from '../../../constants/colors'
import muiBreakpoints from '../../../utilities/muiBreakpoints'

export const StyledMenuItem = muiStyled(MenuItem)`
    &.Mui-selected {
        font-weight: 700;
        ${(props) =>
          props.$isHasHeroImage &&
          `border-bottom: solid 2px ${colors.pastelGray}`};
          ${(props) => muiBreakpoints(props, 'md')} {
              border-bottom: solid 2px black;
              background-color: transparent;
          }
        }
`

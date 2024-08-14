import { styled as muiStyled } from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import colors from '../../../constants/colors'

export const StyledMenuItem = muiStyled(MenuItem)`
    &.Mui-selected {
        background-color: transparent;
        border-bottom: solid 2px black;
        font-weight: 700;
        ${(props) =>
          props.$isHome && `border-bottom: solid 2px ${colors.pastelGray}`};
    }
`

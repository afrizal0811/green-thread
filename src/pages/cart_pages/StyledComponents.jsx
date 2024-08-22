import { styled as muiStyled } from '@mui/material'
import { Box, Image } from '../../components/material_ui'
import colors from '../../constants/colors'
export const StyledImage = muiStyled(Image)`
    border-radius: 10px;
`

export const StyledWrapper = muiStyled(Box)`
    background-color: ${colors.paleSilver};
    border-radius: 10px;
    padding: 30px;
    height: 100%;
    filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.25));
`

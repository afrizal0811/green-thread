import { styled as muiStyled } from '@mui/material'
import { Box } from '../material_ui'

export const StyledLogoContent = muiStyled(Box)`
    cursor: pointer;
    &:hover {
        background-color: rgba(0, 0, 0, 0.05);
    }
`

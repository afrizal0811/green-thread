import { styled as muiStyled } from '@mui/material'
import { Image } from '../../components/material_ui'

export const StyledOfficeImage = muiStyled(Image)`
    -webkit-mask-image:-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0.1)));
    mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));
    width: 100%;
`

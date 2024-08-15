import { styled as muiStyled } from '@mui/material'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import colors from '../../../constants/colors'

export const StyledAccordion = muiStyled(Accordion)`
    background-color: transparent;
`

export const StyledAccordionSummary = muiStyled(AccordionSummary)`
    border: solid 1px black;
    background-color: ${colors.paleSilver};
    &:hover {
        background-color: rgba(0, 0, 0, 0.08);
    }
`

export const StyledAccordionDetails = muiStyled(AccordionDetails)`
    border: solid 1px black;
    border-top: none;
`

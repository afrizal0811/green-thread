import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import React from 'react'
import { Box, Typography } from '../../material_ui'
import {
  StyledAccordion,
  StyledAccordionDetails,
  StyledAccordionSummary,
} from './StyledComponents'

const MuiAccordion = (props) => {
  const { list, boxWidth } = props
  return (
    <Box
      alignItems='center'
      display='flex'
      flexDirection='column'
      width='100%'
    >
      <Box width={boxWidth}>
        {list.map(({ question, answer }) => (
          <StyledAccordion>
            <StyledAccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls={question}
              id={question}
            >
              <Typography
                variant='p'
                fontWeight='700'
              >
                {question}
              </Typography>
            </StyledAccordionSummary>
            <StyledAccordionDetails>
              <Typography variant='p'>{answer}</Typography>
            </StyledAccordionDetails>
          </StyledAccordion>
        ))}
      </Box>
    </Box>
  )
}

export default MuiAccordion

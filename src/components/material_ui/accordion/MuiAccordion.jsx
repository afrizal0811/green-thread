import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import React from 'react'
import { Box, Typography } from '../../material_ui'

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
          <Accordion className='!bg-transparent'>
            <AccordionSummary
              className='border-2 border-black !bg-pale-silver-dark hover:!bg-opacity-5'
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
            </AccordionSummary>
            <AccordionDetails className='!bg-pale-silver'>
              <Typography variant='p'>{answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  )
}

export default MuiAccordion

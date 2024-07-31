import React from 'react'
import { Box, Image, Typography } from '../../../components/material_ui'
import { StyledIconWrapper } from '../StyledComponents'
import { sustainCommits } from './help'
const SustainCommitSection = () => {
  return (
    <Box
      alignItems='center'
      display='flex'
      flexDirection='column'
      gap
      justifyContent='center'
    >
      <Typography
        fontSize={{ xs: '30px', sm: '36px' }}
        fontWeight='700'
        variant='h3'
        textAlign='center'
        sx={{ mb: '10px' }}
      >
        Sustainability Commitment
      </Typography>
      <Box
        alignItems='center'
        display='flex'
        flexDirection={{ xs: 'column', sm: 'row' }}
        gap={{ xs: 2, sm: 4, lg: 10 }}
        justifyContent='center'
        flexWrap='wrap'
      >
        {sustainCommits.map((data) => (
          <Box
            alignItems='center'
            display='flex'
            flexDirection='column'
            gap={2}
            justifyContent='center'
          >
            <StyledIconWrapper>
              <Image
                alt={data.title}
                src={data.src}
                height='80px'
              />
            </StyledIconWrapper>
            <Typography
              fontSize={'20px'}
              fontWeight='700'
              variant='p'
            >
              {data.title}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default SustainCommitSection

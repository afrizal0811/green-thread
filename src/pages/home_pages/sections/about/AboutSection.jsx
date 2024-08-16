import React from 'react'
import { Box, ImageList, Typography } from '../../../../components/material_ui'
import { StyledTitle } from '../../StyledComponents'
import { imagesList, aboutText } from './help'

const AboutSection = () => {
  const renderSectionTitle = (
    <Box
      display='flex'
      flexDirection='row'
      gap
    >
      <Typography variant='h4'>
        Welcome to <StyledTitle>Green Threads</StyledTitle>
      </Typography>
    </Box>
  )
  return (
    <Box
      alignItems='center'
      display='flex'
      justifyContent='center'
    >
      <Box
        alignItems='center'
        display='flex'
        flexDirection={{ xs: 'column-reverse', md: 'row' }}
        justifyContent='space-evenly'
        gap={{ xs: '20px' }}
        width='100%'
      >
        <Box
          display='flex'
          flexDirection='column'
          flexWrap='wrap'
          gap={2}
          justifyContent='center'
          width={{ xs: 350, sm: 570, md: 450 }}
          sx={{ px: '20px' }}
        >
          {renderSectionTitle}
          <Typography
            fontSize='16px'
            fontWeight='400'
            align='justify'
            variant='about'
          >
            {aboutText}
          </Typography>
        </Box>
        <Box
          sx={{ width: { xs: '70%', md: '40%' }, pt: { xs: 0, md: '50px' } }}
        >
          <ImageList
            item={imagesList}
            variant='masonry'
            cols={3}
            gap={10}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default AboutSection

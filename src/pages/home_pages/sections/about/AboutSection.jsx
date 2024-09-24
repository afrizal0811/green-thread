import React from 'react'
import { Box, ImageList, Typography } from '../../../../components/material_ui'
import { aboutText, imagesList } from './help'

const AboutSection = () => {
  const renderSectionTitle = (
    <Box
      display='flex'
      flexDirection='row'
      gap
    >
      <Typography variant='h4'>
        Welcome to <span className='text-forest-green-dark'>Green Threads</span>
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
        gap
        width='100%'
      >
        <Box
          className='px-5 md:px-0'
          display='flex'
          flexDirection='column'
          flexWrap='wrap'
          gap={2}
          justifyContent='center'
          width={{ xs: 350, sm: 570, md: 450 }}
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
        <Box className='w-3/4 md:w-2/5 pt-0 md:pt-12'>
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

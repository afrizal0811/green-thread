import React from 'react'
import { Box, ImageList, Typography } from '../../../components/material_ui'
import colors from '../../../constants/colors'
import { aboutItems } from './help'
const AboutSection = () => {
  const renderSectionTitle = (
    <Box
      display='flex'
      flexDirection='row'
      gap
    >
      <Typography
        variant='h4'
        fontWeight='700'
      >
        Welcome to{' '}
        <span style={{ color: colors.forestGreen }}>Green Threads</span>
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
          gap='10px'
          justifyContent='center'
          width={{ xs: 330, sm: 570, md: 600 }}
          sx={{ px: '20px' }}
        >
          {renderSectionTitle}
          <Typography
            fontSize='16px'
            fontWeight='400'
            align='justify'
            variant='p'
          >
            Founded by a group of friends passionate about both style and
            environmental conservation, GreenThreads aims to redefine fashion by
            placing sustainability at its core. We are committed to using
            eco-friendly materials, ethical production practices, and low-impact
            dyes to create high-quality clothing that respects both people and
            the planet. Our collections offer versatile, timeless designs that
            are as stylish as they are responsible. Join us on our journey to
            make a positive impact, one garment at a time.
          </Typography>
        </Box>
        <Box
          sx={{ width: { xs: '70%', md: '40%' }, pt: { xs: 0, md: '50px' } }}
        >
          <ImageList
            item={aboutItems}
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

import React from 'react'
import { Box, Image, Typography } from '../../../components/material_ui'
import colors from '../../../constants/colors'
import imagePath from '../../../constants/imagePaths'
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
      height='400px'
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
          >
            Green Threads aims to transform the fashion industry with
            eco-friendly practices. We prioritize using organic and recycled
            materials, ethical production, low-impact dyes, and innovative
            recycling methods. Our mission is to provide stylish, high-quality
            clothing that respects both people and the planet.
          </Typography>
        </Box>
        <Image
          alt='About'
          height={{ xs: 200, sm: 340, md: 300, lg: 310 }}
          src={imagePath.aboutImage}
          width={{ xs: 330, sm: 550, md: 500, lg: 520 }}
          sx={{ px: '10px' }}
        />
      </Box>
    </Box>
  )
}

export default AboutSection

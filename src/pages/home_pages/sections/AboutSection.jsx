import React from 'react'
import { Box, Image, Typography } from '../../../components/material_ui'
import imagePath from '../../../constants/imagePaths'
const AboutSection = () => {
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
        gap='20px'
        justifyContent='space-evenly'
        width='100%'
      >
        <Box
          display='flex'
          flexDirection='column'
          gap='10px'
          justifyContent='center'
          width={{ xs: 330, sm: 450, xl: 500 }}
        >
          <Typography
            variant='h5'
            fontWeight='700'
          >
            Welcome to Green Threads!
          </Typography>
          <Typography>
            Green Threads aims to transform the fashion industry with
            eco-friendly practices. We prioritize using organic and recycled
            materials, ethical production, low-impact dyes, and innovative
            recycling methods. Our mission is to provide stylish, high-quality
            clothing that respects both people and the planet.
          </Typography>
        </Box>
        <Image
          alt='About'
          height={{ xs: 200, sm: 280, md: 300 }}
          src={imagePath.aboutImage}
          width={{ xs: 330, sm: 450, md: 500 }}
        />
      </Box>
    </Box>
  )
}

export default AboutSection

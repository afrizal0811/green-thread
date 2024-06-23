import React from 'react'
import { Box } from '../../components/material_ui'
import AboutSection from './sections/AboutSection'
import HeroSection from './sections/HeroSection'
const HomePage = () => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      gap={{ xs: '80px', sm: '100px', md: '50px' }}
    >
      <HeroSection />
      <AboutSection />
    </Box>
  )
}

export default HomePage

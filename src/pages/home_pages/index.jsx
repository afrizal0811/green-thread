import React from 'react'
import { Box } from '../../components/material_ui'
import AboutSection from './sections/AboutSection'
import FeaturedProductsSection from './sections/FeaturedProductsSection'
import HeroSection from './sections/HeroSection'
import NewsletterSection from './sections/NewsletterSection'
import ReviewSection from './sections/ReviewSection'
import SustainCommitSection from './sections/SustainCommitSection'
const HomePage = () => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      gap={{ xs: '50px', sm: '100px', md: '30px' }}
    >
      <HeroSection />
      <AboutSection />
      <FeaturedProductsSection />
      <SustainCommitSection />
      <ReviewSection />
      <NewsletterSection />
    </Box>
  )
}

export default HomePage

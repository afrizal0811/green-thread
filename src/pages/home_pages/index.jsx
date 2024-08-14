import React from 'react'
import { Box } from '../../components/material_ui'
import AboutSection from './sections/about/AboutSection'
import FeaturedProductsSection from './sections/featured_products/FeaturedProductsSection'
import HeroSection from './sections/hero/HeroSection'
import NewsletterSection from './sections/newsletter/NewsletterSection'
import ReviewSection from './sections/review/ReviewSection'
import SustainCommitSection from './sections/sustain_commit/SustainCommitSection'
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

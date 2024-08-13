import React from 'react'
import { Box, Card, Typography } from '../../../components/material_ui'
import colors from '../../../constants/colors'
import {
  StyledFeaturedButton,
  StyledProductsWrapper,
} from '../StyledComponents'
import { featuredProducts } from './help'
const FeaturedProductsSection = () => {
  return (
    <StyledProductsWrapper
      alignItems='center'
      display='flex'
      flexDirection='column'
      gap
      justifyContent='center'
    >
      <Typography
        fontSize={{ xs: '30px', sm: '40px' }}
        fontWeight='700'
        variant='h3'
        color={colors.white}
        sx={{ mb: '10px' }}
      >
        Featured Products
      </Typography>
      <Typography
        align='center'
        color={colors.white}
        fontSize={{ xs: '16px', sm: '20px' }}
        fontWeight='300'
        sx={{
          width: { xs: '70%', md: '60%' },
          mb: '20px',
        }}
        variant='h3'
      >
        Explore our top picks from the latest collection. Each item is selected
        for its style, quality, and sustainability, offering a glimpse of what
        Green Threads has to offer. Discover your next favorite piece here.
      </Typography>
      <Box
        alignItems='stretch'
        display='flex'
        flexWrap='wrap'
        gap='20px'
        justifyContent='center'
      >
        {featuredProducts.map((product) => (
          <Card
            alt={product.title}
            src={product.src}
            height='200'
            title={product.title}
            text={product.text}
            sx={{ maxWidth: '300px' }}
          />
        ))}
      </Box>
      <StyledFeaturedButton
        text='Shop Now'
        variant='contained'
      />
    </StyledProductsWrapper>
  )
}

export default FeaturedProductsSection

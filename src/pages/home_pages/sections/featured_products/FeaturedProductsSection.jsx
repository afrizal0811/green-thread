import React from 'react'
import { Box, Card, Typography } from '../../../../components/material_ui'
import colors from '../../../../constants/colors'
import { StyledFeaturedButton, StyledProductsWrapper } from './StyledComponents'
import { productsList } from './help'

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
        color={colors.white}
        fontSize={{ xs: '30px', sm: '40px' }}
        sx={{ mb: '10px' }}
        variant='h3'
      >
        Featured Products
      </Typography>
      <Typography
        align='center'
        color={colors.white}
        fontSize={{ xs: '16px' }}
        sx={{
          width: { xs: '70%', md: '60%' },
          mb: '20px',
        }}
        variant='p'
      >
        Explore our top picks from the latest collection. Each item is selected
        for its style, quality, and sustainability, offering a glimpse of what
        Green Threads has to offer. Discover your next favorite piece here.
      </Typography>
      <Box
        alignItems='stretch'
        display='flex'
        flexWrap='wrap'
        gap={2}
        justifyContent='center'
      >
        {productsList.map((product) => (
          <Card
            alt={product.title}
            height='200'
            src={product.src}
            text={product.text}
            title={product.title}
            sx={{ maxWidth: { xs: '300px', md: '400px', lg: '300px' } }}
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

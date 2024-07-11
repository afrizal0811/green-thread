import React from 'react'
import { Box, Card, Typography } from '../../../components/material_ui'
import colors from '../../../constants/colors'
import { StyledProductsWrapper } from '../StyledComponents'
import { featuredProducts } from './help'
const FeaturedProductsSection = () => {
  return (
    <StyledProductsWrapper
      alignItems='center'
      display='flex'
      flexDirection='column'
      gap='20px'
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
    </StyledProductsWrapper>
  )
}

export default FeaturedProductsSection

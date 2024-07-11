import React from 'react'
import { Box, Card, Typography } from '../../../components/material_ui'
import { featuredProducts } from './help'
const FeaturedProductsSection = () => {
  return (
    <Box
      alignItems='center'
      display='flex'
      flexDirection='column'
      gap='20px'
      justifyContent='center'
    >
      <Typography
        fontSize={{ xs: '30px', sm: '42px', md: '48px' }}
        fontWeight='700'
        variant='h3'
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
          />
        ))}
      </Box>
    </Box>
  )
}

export default FeaturedProductsSection

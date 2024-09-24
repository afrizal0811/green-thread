import React from 'react'
import { StyledButton } from '../../../../StyledComponents'
import { Box, Card, Typography } from '../../../../components/material_ui'
import colors from '../../../../constants/colors'
import { productsList } from './help'

const FeaturedProductsSection = () => {
  return (
    <Box
      alignItems='center'
      display='flex'
      flexDirection='column'
      gap
      justifyContent='center'
      className='p-10 mt-0 md:mt-10 bg-forest-green-dark'
    >
      <Typography
        color={colors.white}
        fontSize={{ xs: '30px', sm: '40px' }}
        variant='h3'
      >
        Featured Products
      </Typography>
      <Typography
        className='w-full md:w-3/5 !mb-5'
        align='center'
        color={colors.white}
        fontSize={{ xs: '16px' }}
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
      <StyledButton
        text='Shop Now'
        variant='contained'
        className='!text-base !mt-5 !p-2 w-[200px] h-[50px]'
      />
    </Box>
  )
}

export default FeaturedProductsSection

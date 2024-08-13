import React from 'react'
import { Box, Typography } from '../../../components/material_ui'
import imagePath from '../../../constants/imagePaths'
import {
  StyledHeroButton,
  StyledHeroImage,
  StyledHeroWrapper,
} from '../StyledComponents'
const Hero = () => {
  return (
    <Box>
      <StyledHeroImage $src={imagePath.heroImage} />
      <StyledHeroWrapper
        alignItems={{ xs: 'center', md: 'start' }}
        display='flex'
        flexDirection='column'
        gap={2}
        justifyContent='center'
      >
        <Box
          alignItems={{ xs: 'center', md: 'start' }}
          display='flex'
          flexDirection='column'
        >
          <Typography
            fontSize={{ xs: '30px', sm: '42px', md: '48px' }}
            fontWeight='300'
            variant='h3'
          >
            WEAR THE FUTURE
          </Typography>
          <Typography
            variant='h3'
            fontSize={{ xs: '30px', sm: '42px', md: '48px' }}
            fontWeight='700'
          >
            SUSTAIN THE EARTH
          </Typography>
        </Box>
        <Box
          alignItems={{ xs: 'center', md: 'start' }}
          display='flex'
          flexDirection='column'
          gap
        >
          <Typography
            fontSize={{ xs: '14px', md: '16px' }}
            textAlign={{ xs: 'center', md: 'left' }}
            variant='p'
          >
            Explore sustainable fashion at Green Threads!
            <br />
            Shop our eco-friendly collection now.
          </Typography>
          <StyledHeroButton
            text='Shop Now'
            variant='contained'
          />
        </Box>
      </StyledHeroWrapper>
    </Box>
  )
}

export default Hero

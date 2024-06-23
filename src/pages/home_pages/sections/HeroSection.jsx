import React from 'react'
import { Box, Typography } from '../../../components/material_ui'
import imagePath from '../../../constants/imagePaths'
import {
  StyledHeroButton,
  StyledHeroDetail,
  StyledHeroImage,
  StyledHeroWrapper,
} from '../StyledComponents'
const Hero = () => {
  return (
    <Box>
      <StyledHeroImage $src={imagePath.heroImage} />
      <StyledHeroWrapper
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems={{ xs: 'center', md: 'start' }}
        gap='10px'
      >
        <Box
          display='flex'
          flexDirection='column'
          alignItems={{ xs: 'center', md: 'start' }}
        >
          <Typography
            variant='h3'
            fontSize={{ xs: '30px', sm: '42px', md: '48px' }}
            fontWeight='300'
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
        <StyledHeroDetail
          display='flex'
          flexDirection='column'
          alignItems={{ xs: 'center', md: 'start' }}
        >
          <Typography
            textAlign={{ xs: 'center', md: 'left' }}
            fontSize={{ xs: '14px', md: '16px' }}
          >
            Explore sustainable fashion at Green Threads!
            <br />
            Shop our eco-friendly collection now.
          </Typography>
          <StyledHeroButton
            variant='contained'
            text='Shop Now'
          />
        </StyledHeroDetail>
      </StyledHeroWrapper>
    </Box>
  )
}

export default Hero

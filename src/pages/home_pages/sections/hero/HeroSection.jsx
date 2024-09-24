import React from 'react'
import { StyledButton } from '../../../../StyledComponents'
import { Box, Typography } from '../../../../components/material_ui'
import imagePath from '../../../../constants/imagePaths'
const Hero = () => {
  return (
    <Box>
      <div
        className='bg-no-repeat bg-top bg-cover absolute w-full h-screen -z-10 text-white overflow-hidden brightness-[80%] rounded-b-[50%_20%] drop-shadow-xl'
        style={{
          backgroundImage: `url(${imagePath.heroImage})`,
        }}
      />
      <Box
        alignItems={{ xs: 'center', md: 'start' }}
        display='flex'
        flexDirection='column'
        gap={2}
        justifyContent='center'
        className='text-white h-screen ml-0 md:ml-10'
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
          <StyledButton
            className='w-[150px] !text-base'
            text='Shop Now'
            variant='contained'
          />
        </Box>
      </Box>
    </Box>
  )
}

export default Hero

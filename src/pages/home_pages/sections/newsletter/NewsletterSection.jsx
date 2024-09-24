import React from 'react'
import { StyledButton, StyledInput } from '../../../../StyledComponents'
import { Box, Typography } from '../../../../components/material_ui'

const NewsletterSection = () => {
  return (
    <Box
      className='my-5 drop-shadow-xl '
      display='flex'
      alignItems='center'
      justifyContent='center'
    >
      <Box
        className='text-white bg-forest-green-dark rounded-xl p-10 mx-8 md:mx-0 w-full md:w-3/4'
        display='flex'
        flexDirection='column'
        gap={4}
      >
        <div>
          <Typography
            fontSize={{ xs: '20px', sm: '26px' }}
            fontWeight='700'
            variant='p'
            component='p'
            textAlign='center'
          >
            Subscribe
          </Typography>
          <Typography
            className='pb-5'
            fontSize={{ xs: '34px', sm: '50px' }}
            fontWeight='400'
            variant='curly'
            component='h3'
            textAlign='center'
          >
            Stay up to date
          </Typography>
          <Typography
            fontSize={{ xs: '14px', sm: '18px' }}
            fontWeight='400'
            variant='p'
            component='p'
            textAlign='center'
          >
            Don't miss any of our unique offers.
          </Typography>
        </div>
        <Box
          display='flex'
          flexDirection='column'
          gap={3}
          alignItems='center'
          justifyContent='center'
        >
          <StyledInput
            label='Email'
            variant='filled'
            className='w-full md:w-3/4'
          />
          <StyledButton
            variant='contained'
            text='Subscribe'
            className='!text-base w-full md:w-3/4 !rounded-full'
          />
        </Box>
        <Typography
          fontSize={{ xs: '14px', sm: '18px' }}
          fontWeight='400'
          variant='p'
          component='p'
          textAlign='center'
        >
          By subscribing, you consent to us sending you emails from Green
          Threads.
        </Typography>
      </Box>
    </Box>
  )
}

export default NewsletterSection

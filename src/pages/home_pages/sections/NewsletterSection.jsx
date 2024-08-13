import React from 'react'
import { Box, Typography } from '../../../components/material_ui'
import {
  StyledNewsletterContent,
  StyledNewsletterWrapper,
  StyledSubsButton,
  StyledSubsInput,
} from '../StyledComponents'
const NewsletterSection = () => {
  return (
    <StyledNewsletterWrapper
      display='flex'
      alignItems='center'
      justifyContent='center'
    >
      <StyledNewsletterContent
        display='flex'
        flexDirection='column'
        gap={3}
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
            fontSize={{ xs: '34px', sm: '50px' }}
            fontWeight='400'
            variant='curly'
            component='h3'
            textAlign='center'
            sx={{ pb: '20px' }}
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
          gap
          alignItems='center'
          justifyContent='center'
        >
          <StyledSubsInput
            label='Email'
            variant='filled'
          />
          <StyledSubsButton
            variant='contained'
            text='Subscribe'
            sx={{ width: { xs: '100%', sm: '70%' } }}
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
      </StyledNewsletterContent>
    </StyledNewsletterWrapper>
  )
}

export default NewsletterSection

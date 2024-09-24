import React from 'react'
import { StyledButton, StyledInput } from '../../StyledComponents'
import {
  Accordion,
  Box,
  Divider,
  Typography,
} from '../../components/material_ui'
import { faqList } from './help'

const ContactPage = () => {
  const renderContactForm = (
    <Box
      alignItems='center'
      display='flex'
      flexDirection='column'
      gap={3}
      justifyContent='center'
      width='100%'
      className='mt-7 lg:mt-0'
    >
      <Typography
        fontSize='20px'
        fontWeight='500'
        className='!w-4/5'
        textAlign='justify'
        variant='p'
      >
        If you've got more questions, don't be shy—just give us a shout! We're
        here to help and can't wait to make your shopping spree with Green
        Threads as awesome as finding cash in your old jeans!
      </Typography>
      <StyledInput
        className='w-4/5'
        label='Name'
        variant='filled'
      />
      <StyledInput
        className='w-4/5'
        label='Email'
        variant='filled'
      />
      <StyledInput
        className='w-4/5'
        label='Message'
        variant='filled'
        multiline
        rows={6}
      />
      <StyledButton
        className='w-4/5 !rounded-full py-3 px-6 !text-base '
        text='Send'
      />
    </Box>
  )
  const renderFaq = (
    <Box
      display='flex'
      flexDirection='column'
      gap={2}
      justifyContent='center'
      alignItems='center'
      width='100%'
    >
      <Typography
        variant='h3'
        fontSize={{ xs: '26px', md: '30px' }}
      >
        Frequently Asked Questions
      </Typography>
      <Accordion
        boxWidth='85%'
        list={faqList}
      />
    </Box>
  )
  return (
    <Box
      display='flex'
      flexDirection={{ xs: 'column', md: 'row' }}
      justifyContent='space-around'
      width='100%'
      height={{ xs: 'auto', md: '900px', lg: '100dvh' }}
      gap={{ xs: 7, md: 0 }}
    >
      {renderContactForm}
      <Divider
        flexItem
        orientation='vertical'
        className='hidden md:block'
      />
      {renderFaq}
    </Box>
  )
}

export default ContactPage

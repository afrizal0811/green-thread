import React from 'react'
import {
  Accordion,
  Box,
  Divider,
  Typography,
} from '../../components/material_ui'
import { StyledContactButton, StyledContactInput } from './StyledComponents'
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
      sx={{ mt: { xs: '30px', md: '0' } }}
    >
      <Typography
        fontSize='20px'
        fontWeight='500'
        sx={{ width: '80%' }}
        textAlign='justify'
        variant='p'
      >
        If you've got more questions, don't be shy—just give us a shout! We're
        here to help and can't wait to make your shopping spree with Green
        Threads as awesome as finding cash in your old jeans!
      </Typography>
      <StyledContactInput
        label='Name'
        variant='filled'
      />
      <StyledContactInput
        label='Email'
        variant='filled'
      />
      <StyledContactInput
        label='Message'
        variant='filled'
        multiline
        rows={6}
      />
      <StyledContactButton text='Send' />
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
      height={{ xs: 'auto', md: '100dvh' }}
      gap={{ xs: 5, md: 0 }}
    >
      {renderContactForm}
      <Divider
        flexItem
        orientation='vertical'
        sx={{ display: { xs: 'none', md: 'block' } }}
      />
      {renderFaq}
    </Box>
  )
}

export default ContactPage

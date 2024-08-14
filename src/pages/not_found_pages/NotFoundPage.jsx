import React from 'react'
import { useOutletContext } from 'react-router-dom'
import { Box, Typography } from '../../components/material_ui'
import { StyledBackButton, StyledWrapper } from './StyledComponents'

const NotFoundPage = () => {
  const { navigate } = useOutletContext()
  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
    >
      <StyledWrapper
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        gap
      >
        <Typography variant='giant'>404</Typography>
        <Typography variant='h3'>Page Not Found</Typography>
        <StyledBackButton
          variant='contained'
          text='Home'
          onClick={() => navigate('/')}
        />
      </StyledWrapper>
    </Box>
  )
}

export default NotFoundPage

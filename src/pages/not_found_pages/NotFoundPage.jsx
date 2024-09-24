import React from 'react'
import { useOutletContext } from 'react-router-dom'
import { StyledButton } from '../../StyledComponents'
import { Box, Typography } from '../../components/material_ui'
const NotFoundPage = () => {
  const { navigate } = useOutletContext()
  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      className='h-screen text-black'
    >
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        gap
      >
        <Typography variant='giant'>404</Typography>
        <Typography variant='h3'>Page Not Found</Typography>
        <StyledButton
          className='!text-base w-1/4 !rounded-full !mt-4'
          variant='contained'
          text='Home'
          onClick={() => navigate('/')}
        />
      </Box>
    </Box>
  )
}

export default NotFoundPage

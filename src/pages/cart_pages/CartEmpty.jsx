import React from 'react'
import { useOutletContext } from 'react-router-dom'
import { StyledButton } from '../../StyledComponents'
import { Box, Typography } from '../../components/material_ui'
import imagePath from '../../constants/imagePaths'
import { StyledCartIcon } from './StyledComponents'

const CartEmpty = () => {
  const { navigate } = useOutletContext()
  
  return (
    <Box
      alignItems='center'
      display='flex'
      flexDirection='column'
      gap={10}
      justifyContent='center'
      sx={{ px: 5 }}
    >
      <StyledCartIcon
        height={150}
        width={150}
        src={imagePath.cartIcon}
      />
      <Box
        alignItems='center'
        display='flex'
        flexDirection='column'
        gap={2}
        justifyContent='center'
      >
        <Typography
          variant='h5'
          textAlign='center'
        >
          Your Cart Is Currently Empty!
        </Typography>
        <Typography
          variant='p'
          textAlign='center'
        >
          Looks like you have not added anything to you cart. Go ahead and add
          some items!
        </Typography>
        <StyledButton
          variant='contained'
          text='Shop Now'
          onClick={() => navigate('/shop')}
        />
      </Box>
    </Box>
  )
}

export default CartEmpty

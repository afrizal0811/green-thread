import React, { useState } from 'react'
import { StyledButton } from '../../StyledComponents'
import { Box, Typography } from '../../components/material_ui'
import CartEmpty from './CartEmpty'
import CartFull from './CartFull'

const CartPage = () => {
  const [isClicked, setIsClicked] = useState(false)
  const renderCart = () => {
    if (isClicked) {
      return <CartFull />
    }
    return <CartEmpty />
  }
  return (
    <Box
      alignItems='center'
      display='flex'
      flexDirection='column'
      gap={5}
      justifyContent='center'
      width='100%'
    >
      <Box
        alignItems='center'
        display='flex'
        flexDirection='column'
        gap={2}
        justifyContent='center'
        sx={{ border: 'solid 2px black', p: 5 }}
        width={{ xs: '90%', sm: 'auto' }}
      >
        <Typography
          color='text.secondary'
          textAlign='center'
          variant='h5'
        >
          THIS IS ONLY FOR DEMO!
        </Typography>
        <Typography
          color='text.secondary'
          textAlign='center'
          variant='p'
        >
          Press the button to change the cart
        </Typography>
        <StyledButton
          onClick={() => setIsClicked(!isClicked)}
          sx={{ width: '50%' }}
          text={isClicked ? 'Emptied Cart' : 'Filled Cart'}
          variant='contained'
        />
      </Box>
      {renderCart()}
    </Box>
  )
}

export default CartPage

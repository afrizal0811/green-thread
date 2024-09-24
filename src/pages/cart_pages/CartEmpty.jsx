import React from 'react'
import { useOutletContext } from 'react-router-dom'
import { StyledButton } from '../../StyledComponents'
import { Box, Image, Typography } from '../../components/material_ui'
import imagePath from '../../constants/imagePaths'

const CartEmpty = () => {
  const { navigate } = useOutletContext()

  return (
    <Box
      alignItems='center'
      display='flex'
      flexDirection='column'
      gap={10}
      justifyContent='center'
      className='px-5'
    >
      <Image
        height={150}
        width={150}
        src={imagePath.cartIcon}
        className='rounded-full p-4 bg-maize'
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
          className='w-[150px] !text-base'
          onClick={() => navigate('/shop')}
        />
      </Box>
    </Box>
  )
}

export default CartEmpty

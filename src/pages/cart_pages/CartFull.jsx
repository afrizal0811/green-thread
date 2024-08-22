import React, { useEffect, useState } from 'react'
import { StyledButton } from '../../StyledComponents'
import {
  Box,
  Divider,
  Input,
  RadioButton,
  Select,
  Typography,
} from '../../components/material_ui'
import { clothesColor, clothesSize } from '../../constants/lists'
import numberFormatter from '../../utilities/numberFormatter'
import { StyledImage, StyledWrapper } from './StyledComponents'
import { cartList, deliveryTypeList } from './help'

const CartFull = () => {
  const [value, setValue] = useState('Standard')
  const [subtotal, setSubtotal] = useState(0)
  const delivery = deliveryTypeList.filter((data) => data.name === value)

  useEffect(() => {
    setSubtotal(
      cartList.reduce((acc, data) => acc + data.price * data.quantity, 0)
    )
  }, [])

  const renderItem = (data) => (
    <StyledWrapper
      display='flex'
      flexDirection={{ xs: 'column', sm: 'row' }}
      gap={3}
      height='100%'
      justifyContent='center'
      key={data.id}
      width='auto'
    >
      <Box
        display='flex'
        justifyContent='center'
      >
        <StyledImage
          height={{ xs: 200, sm: 100, lg: 150 }}
          src={data.image}
          width={{ xs: 200, sm: 100, lg: 150 }}
        />
      </Box>
      <Box
        display='flex'
        flexDirection='column'
        gap={5}
        justifyContent='space-evenly'
      >
        <Box>
          <Typography
            fontSize={{ xs: '22px', sm: '24px', lg: '28px' }}
            variant='h5'
          >
            {data.name}
          </Typography>
          <Typography variant='p'>{numberFormatter(data.price)}</Typography>
        </Box>
        <Box
          display='flex'
          flexDirection='row'
          gap={2}
        >
          <Select
            list={clothesSize}
            name='Size'
            sx={{ width: '75px' }}
            value={data.size}
          />
          <Select
            list={clothesColor}
            name='Color'
            sx={{ width: '100px' }}
            value={data.color}
          />
          <Input
            inputProps={{ type: 'number' }}
            label='Quantity'
            name='Quantity'
            sx={{ width: '75px' }}
            value={data.quantity}
          />
        </Box>
      </Box>
      <Box
        display='flex'
        flexDirection='column'
        gap={{ xs: 2, sm: 5 }}
        justifyContent='space-between'
        sx={{ ml: { xs: 0, sm: 'auto' } }}
      >
        <Typography
          fontSize={{ xs: '20px', sm: '24px', lg: '28px' }}
          variant='h5'
        >
          {numberFormatter(data.price * data.quantity)}
        </Typography>
        <StyledButton
          sx={{ width: 'auto', ml: { xs: 0, sm: 'auto' } }}
          text='Delete'
          variant='contained'
        />
      </Box>
    </StyledWrapper>
  )

  const renderText = (title, number, isBold = false) => (
    <Box
      display='flex'
      flexDirection='row'
      justifyContent='space-between'
    >
      <Typography
        color='text.secondary'
        fontWeight={isBold ? 'bold' : 'normal'}
        variant='p'
      >
        {title}
      </Typography>
      <Typography
        color='text.secondary'
        fontWeight={isBold ? 'bold' : 'normal'}
        variant='p'
      >
        {numberFormatter(number)}
      </Typography>
    </Box>
  )

  const renderCheckout = (
    <StyledWrapper
      display='flex'
      flexDirection='column'
      gap={3}
    >
      <Typography variant='h5'>Checkout</Typography>
      <Box
        display='flex'
        flexDirection='column'
        gap
      >
        <RadioButton
          defaultValue='Standard'
          list={deliveryTypeList}
          name='Delivery'
          row='row'
          setValue={setValue}
        />
        <Box
          display='flex'
          flexDirection='column'
          gap
        >
          <Typography
            color='text.secondary'
            variant='p'
          >
            Delivery Date:{' '}
            {delivery.map((data) => (
              <span>{data.date}</span>
            ))}
          </Typography>
          <Typography
            color='text.secondary'
            variant='p'
          >
            Price:{' '}
            {delivery.map((data) => (
              <span>{numberFormatter(data.price)}</span>
            ))}
          </Typography>
        </Box>
      </Box>
      <Divider />
      <Box
        display='flex'
        flexDirection='row'
        gap
      >
        <Input
          label='Promo Code'
          name='Promo Code'
          sx={{ width: '100%' }}
        />
        <StyledButton
          text='Apply'
          variant='contained'
        />
      </Box>
      <Divider />
      {renderText('Subtotal', subtotal, true)}
      {renderText('Discount', 0)}
      {renderText('Delivery', delivery[0].price)}
      <Divider />
      {renderText('Total', subtotal + delivery[0].price, true)}
      <Box
        alignItems='center'
        display='flex'
        justifyContent='center'
        width='100%'
      >
        <StyledButton
          sx={{ width: { lg: '100%' } }}
          text='Checkout'
          variant='contained'
        />
      </Box>
    </StyledWrapper>
  )
  return (
    <Box
      alignItems='center'
      display='flex'
      flexDirection='column'
      gap
      justifyContent='center'
      sx={{ mt: 5 }}
    >
      <Box
        display='flex'
        flexDirection={{ xs: 'column', lg: 'row' }}
        gap={2}
        justifyContent='center'
        width={{ xs: '90%', lg: 'auto' }}
        sx={{ px: { sm: 0, lg: 5 } }}
      >
        <Box
          display='flex'
          flexDirection='column'
          gap={2}
          justifyContent='center'
          width={{ xs: '100%', lg: 'auto' }}
          height='100%'
        >
          {cartList.map((data) => renderItem(data))}
        </Box>
        {renderCheckout}
      </Box>
    </Box>
  )
}

export default CartFull

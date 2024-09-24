import React, { useEffect, useState } from 'react'
import { StyledButton } from '../../StyledComponents'
import {
  Box,
  Divider,
  Image,
  Input,
  RadioButton,
  Select,
  Typography,
} from '../../components/material_ui'
import { clothesColor, clothesSize } from '../../constants/lists'
import numberFormatter from '../../utilities/numberFormatter'
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
    <Box
      display='flex'
      flexDirection={{ xs: 'column', sm: 'row' }}
      gap={5}
      justifyContent='center'
      key={data.id}
      className='w-full h-full bg-pale-silver rounded p-7 shadow-md'
    >
      <Box
        display='flex'
        justifyContent='center'
      >
        <Image
          className='rounded-md aspect-square'
          height={{ xs: 200, sm: 150 }}
          src={data.image}
          width={{ xs: 200, sm: 150}}
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
        className='ml-0 sm:ml-auto'
      >
        <Typography
          fontSize={{ xs: '20px', sm: '24px', lg: '28px' }}
          variant='h5'
        >
          {numberFormatter(data.price * data.quantity)}
        </Typography>
        <StyledButton
          className='w-auto !text-base'
          text='Delete'
          variant='contained'
        />
      </Box>
    </Box>
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
    <Box
      display='flex'
      flexDirection='column'
      gap={3}
      className='w-auto h-full bg-pale-silver rounded p-7 shadow-md'
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
          className='w-full'
        />
        <StyledButton
          text='Apply'
          variant='contained'
          className='!text-base'
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
          className='w-auto lg:w-full !text-base'
          text='Checkout'
          variant='contained'
        />
      </Box>
    </Box>
  )
  return (
    <Box
      alignItems='center'
      display='flex'
      flexDirection='column'
      gap
      justifyContent='center'
      className='mt-7'
    >
      <Box
        display='flex'
        flexDirection={{ xs: 'column', lg: 'row' }}
        gap={2}
        justifyContent='center'
        width={{ xs: '100%', lg: 'auto' }}
        className='px-7'
      >
        <Box
          display='flex'
          flexDirection='column'
          gap={2}
          justifyContent='center'
          width={{ xs: '100%', sm: 'auto' }}
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

import React from 'react'
import Carousel from '../../../../components/carousel/Carousel'
import {
  Avatar,
  Box,
  Rating,
  Typography,
} from '../../../../components/material_ui'
import { carouselSetting, reviewsList } from './help'

const ReviewSection = () => {
  return (
    <Box
      alignItems='center'
      display='flex'
      flexDirection='column'
      gap
      justifyContent='center'
    >
      <Typography
        className='!mb-5'
        fontSize={{ xs: '30px', sm: '36px' }}
        fontWeight='700'
        variant='h3'
        textAlign='center'
      >
        What <span className='text-forest-green-dark'>Green Threads</span> Say!
      </Typography>
      <Carousel settings={carouselSetting}>
        {reviewsList.map((data) => (
          <Box
            className='mb-5 drop-shadow-xl'
            alignItems='center'
            display='flex'
            flexDirection='column'
          >
            <Avatar
              src={data.src}
              alt={data.name}
              className='!w-[150px] !h-[150px] border-8 border-white rounded-full'
            />
            <Box
              className='bg-white rounded-xl h-[350px] w-[300px] p-[50px_20px_20px] -mt-12'
              alignItems='center'
              display='flex'
              flexDirection='column'
              gap
              justifyContent='space-evenly'
            >
              <Typography
                fontSize='26px'
                fontWeight='700'
                variant='h3'
                textAlign='center'
              >
                {data.name}
              </Typography>
              <Typography
                fontSize='16px'
                fontWeight='400'
                variant='p'
                textAlign='left'
              >
                {data.text}
              </Typography>
              <Rating
                name={data.name}
                readOnly='readOnly'
                size='large'
                value={data.star}
              />
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  )
}

export default ReviewSection

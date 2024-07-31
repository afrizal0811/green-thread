import React from 'react'
import {
  Avatar,
  Box,
  Rating,
  Typography,
} from '../../../components/material_ui'
import { StyledReview } from '../StyledComponents'
import { reviewList } from './help'

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
        fontSize={{ xs: '30px', sm: '36px' }}
        fontWeight='700'
        variant='h3'
        textAlign='center'
        sx={{ mb: '20px' }}
      >
        Customer Reviews
      </Typography>
      <Box
        alignItems='center'
        display='flex'
        flexDirection={{ xs: 'column', sm: 'row' }}
        gap={4}
        justifyContent='center'
        flexWrap='wrap'
      >
        {reviewList.map((data) => (
          <Box
            alignItems='center'
            display='flex'
            flexDirection='column'
          >
            <Avatar
              src={data.src}
              alt={data.name}
              sx={{ width: 150, height: 150, border: '5px solid white' }}
            />
            <StyledReview
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
            </StyledReview>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default ReviewSection

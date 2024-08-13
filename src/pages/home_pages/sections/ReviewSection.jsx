import React from 'react'
import Carousel from '../../../components/carousel/Carousel'
import {
  Avatar,
  Box,
  Rating,
  Typography,
} from '../../../components/material_ui'
import {
  StyledColoredTitle,
  StyledReview,
  StyledReviewrapper,
} from '../StyledComponents'
import { carouselSetting, reviewList } from './help'

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
        What <StyledColoredTitle>Clients</StyledColoredTitle> Say!
      </Typography>
      <Carousel settings={carouselSetting}>
        {reviewList.map((data) => (
          <StyledReviewrapper
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
          </StyledReviewrapper>
        ))}
      </Carousel>
    </Box>
  )
}

export default ReviewSection

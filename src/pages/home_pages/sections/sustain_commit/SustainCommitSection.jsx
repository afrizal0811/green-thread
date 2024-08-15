import React from 'react'
import { Box, ImageList, Typography } from '../../../../components/material_ui'
import { StyledTitle } from '../../StyledComponents'
import {
  StyledImage,
  StyledImageListWrapper,
  StyledImageWrapper,
} from './StyledComponents'
import { sustainCommitImages } from './help'

const SustainCommitSection = () => {
  const renderImage = (
    <StyledImageWrapper
      display='flex'
      flexDirection='column'
      gap={2}
    >
      {sustainCommitImages.map((data) => {
        const isEven = data.id % 2 === 0
        return (
          <Box
            alignItems='center'
            display='flex'
            flexDirection={isEven ? 'row-reverse' : 'row'}
            gap={5}
            justifyContent='center'
            key={data.id}
            width='100%'
          >
            <StyledImage
              $id={data.id}
              src={data.src}
            />
            <Box
              alignItems={isEven ? 'flex-end' : 'flex-start'}
              display='flex'
              flexDirection='column'
              gap
              width='50%'
            >
              <Typography variant='h5'>{data.title}</Typography>
              <Typography
                textAlign={isEven ? 'right' : 'left'}
                variant='p'
              >
                {data.text}
              </Typography>
            </Box>
          </Box>
        )})}
    </StyledImageWrapper>
  )

  const renderImageList = (
    <StyledImageListWrapper>
      <ImageList
        cols={1}
        gap={10}
        height='auto'
        isTitle={true}
        item={sustainCommitImages}
        width='300px'
      />
    </StyledImageListWrapper>
  )

  return (
    <Box
      alignItems='center'
      display='flex'
      flexDirection='column'
      gap={5}
      justifyContent='center'
      sx={{ mb: 5 }}
    >
      <Typography
        fontSize={{ xs: '30px', sm: '36px' }}
        fontWeight='700'
        variant='h3'
        textAlign='center'
      >
        <StyledTitle>Sustainability</StyledTitle> Commitments
      </Typography>
      <Box
        alignItems='center'
        display='flex'
        flexWrap='wrap'
        gap={{ sm: 4, lg: 10 }}
        justifyContent='center'
        width='100%'
      >
        {renderImage}
        {renderImageList}
      </Box>
    </Box>
  )
}

export default SustainCommitSection

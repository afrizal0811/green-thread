import React from 'react'
import {
  Box,
  Image,
  ImageList,
  Typography,
} from '../../../../components/material_ui'
import { StyledTitle } from '../../StyledComponents'
import {
  StyledIconContent,
  StyledIconWrapper,
  StyledImageWrapper,
} from './StyledComponents'
import { sustainCommitIcons, sustainCommitImages } from './help'

const SustainCommitSection = () => {
  const renderIcon = sustainCommitIcons.map((data) => (
    <StyledIconWrapper
      alignItems='center'
      flexDirection='column'
      gap={2}
      justifyContent='center'
    >
      <StyledIconContent $id={data.id}>
        <Image
          alt={data.title}
          src={data.src}
          height='80px'
        />
      </StyledIconContent>
      <Typography
        fontSize={'18px'}
        fontWeight='700'
        variant='p'
      >
        {data.title}
      </Typography>
    </StyledIconWrapper>
  ))
  const renderImage = (
    <StyledImageWrapper>
      <ImageList
        cols={1}
        gap={10}
        height='auto'
        isTitle={true}
        item={sustainCommitImages}
        width='300px'
      />
    </StyledImageWrapper>
  )

  return (
    <Box
      alignItems='center'
      display='flex'
      flexDirection='column'
      gap
      justifyContent='center'
      sx={{ height: { xs: 'auto', sm: '400px' } }}
    >
      <Typography
        fontSize={{ xs: '30px', sm: '36px' }}
        fontWeight='700'
        variant='h3'
        textAlign='center'
        sx={{ mb: '50px' }}
      >
        <StyledTitle>Sustainability</StyledTitle> Commitments
      </Typography>
      <Box
        alignItems='center'
        display='flex'
        gap={{ sm: 4, lg: 10 }}
        justifyContent='center'
        flexWrap='wrap'
      >
        {renderIcon}
        {renderImage}
      </Box>
    </Box>
  )
}

export default SustainCommitSection

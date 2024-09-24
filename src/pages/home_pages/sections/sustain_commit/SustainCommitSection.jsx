import React from 'react'
import {
  Box,
  Image,
  ImageList,
  Typography,
} from '../../../../components/material_ui'
import { sustainCommitImages } from './help'

const SustainCommitSection = () => {
  const renderImage = (
    <Box
      className='w-full mx-6'
      display={{ xs: 'none', sm: 'flex' }}
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
            <Image
              src={data.src}
              className='drop-shadow-xl w-[300px] h-[300px] rounded-xl object-cover'
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
        )
      })}
    </Box>
  )

  const renderImageList = (
    <Box display={{ xs: 'flex', sm: 'none' }}>
      <ImageList
        cols={1}
        gap={20}
        height='auto'
        isTitle={true}
        item={sustainCommitImages}
        width='300px'
      />
    </Box>
  )

  return (
    <Box
      alignItems='center'
      display='flex'
      flexDirection='column'
      gap={5}
      justifyContent='center'
    >
      <Typography
        fontSize={{ xs: '30px', sm: '36px' }}
        fontWeight='700'
        variant='h3'
        textAlign='center'
      >
        <span className='text-forest-green-dark'>Green Threads</span>{' '}
        Commitments
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

import React from 'react'
import imagePath from '../../constants/imagePaths'
import { Box, Image, Typography } from '../material_ui'
const BrandLogo = (props) => {
  const {
    display,
    flexGrow,
    fontSize,
    imageHeight,
    imageWidth,
    justifyContent,
    navigate,
  } = props

  return (
    <Box
      alignItems='center'
      display={display}
      flexGrow={flexGrow}
      justifyContent={justifyContent}
    >
      <Box
        alignItems='center'
        className='cursor-pointer hover:bg-black hover:bg-opacity-5'
        display='flex'
        gap
        onClick={() => navigate('/')}
      >
        <Image
          alt='logo'
          height={imageHeight}
          src={imagePath.logo}
          width={imageWidth}
        />
        <Typography
          fontSize={fontSize}
          variant='h5'
        >
          Green Threads
        </Typography>
      </Box>
    </Box>
  )
}

export default BrandLogo

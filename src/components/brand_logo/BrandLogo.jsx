import React from 'react'
import imagePath from '../../constants/imagePaths'
import { Box, Image, Typography } from '../material_ui'
import { StyledLogoContent } from './StyledComponents'
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
      <StyledLogoContent
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
          sx={{
            pt: '10px',
          }}
          variant='h5'
        >
          Green Threads
        </Typography>
      </StyledLogoContent>
    </Box>
  )
}

export default BrandLogo

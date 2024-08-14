import Box from '@mui/material/Box'
import React from 'react'
const MuiImage = (props) => {
  const { alt, className, height, src, sx, width } = props
  return (
    <Box
      alt={alt}
      className={className}
      component='img'
      height={height}
      src={src}
      sx={sx}
      width={width}
      loading='lazy'
    />
  )
}

export default MuiImage

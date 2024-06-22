import Avatar from '@mui/material/Avatar'
import React from 'react'
const MuiAvatar = (props) => {
  const { alt, className, sx, src } = props
  return (
    <Avatar
      alt={alt}
      className={className}
      src={src}
      sx={sx}
    />
  )
}

export default MuiAvatar

import Box from '@mui/material/Box'
import React from 'react'
const MuiBox = (props) => {
  const { children, className, sx } = props
  return (
    <Box
      sx={sx}
      className={className}
    >
      {children}
    </Box>
  )
}

export default MuiBox

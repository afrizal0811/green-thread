import Box from '@mui/material/Box'
import React from 'react'
const MuiBox = (props) => {
  const {
    alignItems,
    children,
    className,
    display,
    flexDirection,
    gap,
    justifyContent,
    sx,
  } = props
  return (
    <Box
      alignItems={alignItems}
      className={className}
      display={display}
      flexDirection={flexDirection}
      gap={gap}
      justifyContent={justifyContent}
      sx={sx}
    >
      {children}
    </Box>
  )
}

export default MuiBox

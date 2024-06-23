import Box from '@mui/material/Box'
import React from 'react'
const MuiBox = (props) => {
  const {
    alignItems,
    component,
    children,
    className,
    display,
    flexDirection,
    flexGrow,
    gap,
    height,
    justifyContent,
    src,
    sx,
    width,
  } = props
  return (
    <Box
      alignItems={alignItems}
      className={className}
      component={component}
      display={display}
      flexDirection={flexDirection}
      flexGrow={flexGrow}
      gap={gap}
      height={height}
      justifyContent={justifyContent}
      src={src}
      sx={sx}
      width={width}
    >
      {children}
    </Box>
  )
}

export default MuiBox

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
    flexWrap,
    gap,
    height,
    justifyContent,
    onClick,
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
      flexWrap={flexWrap}
      gap={gap}
      height={height}
      justifyContent={justifyContent}
      onClick={onClick}
      src={src}
      sx={sx}
      width={width}
    >
      {children}
    </Box>
  )
}

export default MuiBox

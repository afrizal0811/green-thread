import Typography from '@mui/material/Typography'
import React from 'react'
const MuiTypography = (props) => {
  const {
    children,
    className,
    component,
    fontSize,
    fontWeight,
    noWrap,
    sx,
    textAlign,
    variant,
  } = props
  return (
    <Typography
      className={className}
      component={component}
      fontSize={fontSize}
      fontWeight={fontWeight}
      noWrap={noWrap}
      sx={sx}
      textAlign={textAlign}
      variant={variant}
    >
      {children}
    </Typography>
  )
}

export default MuiTypography

import Typography from '@mui/material/Typography'
import React from 'react'
const MuiTypography = (props) => {
  const {
    align,
    children,
    color,
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
      align={align}
      className={className}
      color={color}
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

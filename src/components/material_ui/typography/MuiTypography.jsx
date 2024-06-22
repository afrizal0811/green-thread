import Typography from '@mui/material/Typography'
import React from 'react'
const MuiTypography = (props) => {
  const { children, className, component, noWrap, sx, textAlign, variant } = props
  return (
    <Typography
      component={component}
      className={className}
      noWrap={noWrap}
      sx={sx}
      variant={variant}
      textAlign={textAlign}
    >
      {children}
    </Typography>
  )
}

export default MuiTypography

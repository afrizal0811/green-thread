import { createTheme, ThemeProvider } from '@mui/material'
import Typography from '@mui/material/Typography'
import React from 'react'
import { themesSetting } from './help'
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

  const theme = createTheme(themesSetting)
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  )
}

export default MuiTypography

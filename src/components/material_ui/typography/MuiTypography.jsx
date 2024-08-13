import { createTheme, ThemeProvider } from '@mui/material'
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

  const theme = createTheme({
    typography: {
      p: {
        fontFamily: 'Josefin Sans',
        fontWeight: 400,
        fontSize: '18px',
        lineHeight: '20px',
        letterSpacing: '0.02em',
      },
      curly: {
        fontFamily: 'Pacifico',
        lineHeight: '50px',
        letterSpacing: '0.02em',
      },
    },
  })
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

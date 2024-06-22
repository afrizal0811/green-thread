import Container from '@mui/material/Container'
import React from 'react'

const MuiContainer = (props) => {
  const { children, maxWidth } = props
  return <Container maxWidth={maxWidth}>{children}</Container>
}

export default MuiContainer

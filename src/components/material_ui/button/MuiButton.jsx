import Button from '@mui/material/Button'
import React from 'react'
const MuiButton = (props) => {
  const { variant, text, className } = props
  return (
    <Button
      className={className}
      variant={variant}
    >
      {text}
    </Button>
  )
}

export default MuiButton

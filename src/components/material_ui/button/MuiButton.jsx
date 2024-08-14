import Button from '@mui/material/Button'
import React from 'react'
const MuiButton = (props) => {
  const { variant, text, className, onClick } = props
  return (
    <Button
      className={className}
      onClick={onClick}
      variant={variant}
    >
      {text}
    </Button>
  )
}

export default MuiButton

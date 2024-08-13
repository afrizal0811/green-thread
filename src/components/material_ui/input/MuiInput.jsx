import TextField from '@mui/material/TextField'
import React from 'react'
const MuiInput = (props) => {
  const { id, label, variant, sx, className, color } = props
  return (
    <TextField
      className={className}
      color={color}
      id={id}
      label={label}
      sx={sx}
      variant={variant}
    />
  )
}

export default MuiInput

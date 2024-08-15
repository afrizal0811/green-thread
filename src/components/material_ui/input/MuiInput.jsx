import TextField from '@mui/material/TextField'
import React from 'react'
const MuiInput = (props) => {
  const { className, color, id, label, multiline, rows, sx, variant } = props
  return (
    <TextField
      autoComplete='off'
      className={className}
      color={color}
      id={id}
      label={label}
      multiline={multiline}
      rows={rows}
      sx={sx}
      variant={variant}
    />
  )
}

export default MuiInput

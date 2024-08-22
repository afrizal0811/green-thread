import TextField from '@mui/material/TextField'
import React from 'react'
const MuiInput = (props) => {
  const {
    className,
    color,
    id,
    inputProps,
    label,
    multiline,
    rows,
    sx,
    variant,
    value,
  } = props
  return (
    <TextField
      autoComplete='off'
      className={className}
      color={color}
      id={id}
      inputProps={inputProps}
      label={label}
      multiline={multiline}
      rows={rows}
      sx={sx}
      variant={variant}
      value={value}
    />
  )
}

export default MuiInput

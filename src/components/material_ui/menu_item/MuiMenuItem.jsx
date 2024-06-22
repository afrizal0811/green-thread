import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import React from 'react'

const MuiMenuItem = (props) => {
  const { text, key, onClick, textAlign } = props
  return (
    <MenuItem
      key={key}
      onClick={onClick}
    >
      <Typography textAlign={textAlign}>{text}</Typography>
    </MenuItem>
  )
}

export default MuiMenuItem

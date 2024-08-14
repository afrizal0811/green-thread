import Divider from '@mui/material/Divider'
import React from 'react'

const MuiDivider = (props) => {
  const { sx, className } = props
  return (
    <Divider
      className={className}
      sx={sx}
    />
  )
}

export default MuiDivider

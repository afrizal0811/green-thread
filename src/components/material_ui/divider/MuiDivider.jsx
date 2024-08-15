import Divider from '@mui/material/Divider'
import React from 'react'

const MuiDivider = (props) => {
  const { className, orientation, flexItem, sx } = props
  return (
    <Divider
      className={className}
      orientation={orientation}
      flexItem={flexItem}
      sx={sx}
    />
  )
}

export default MuiDivider

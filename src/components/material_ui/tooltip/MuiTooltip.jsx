import Tooltip from '@mui/material/Tooltip'
import React from 'react'
const MuiTooltip = (props) => {
  const { children, title } = props

  return <Tooltip title={title}>{children}</Tooltip>
}

export default MuiTooltip

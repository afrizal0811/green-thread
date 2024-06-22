import Menu from '@mui/material/Menu'
import React from 'react'
const MuiMenu = (props) => {
  const {
    anchorEl,
    anchorOrigin,
    className,
    id,
    keepMounted,
    onClose,
    open,
    sx,
    transformOrigin,
    children,
  } = props

  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={anchorOrigin}
      className={className}
      id={id}
      keepMounted={keepMounted}
      onClose={onClose}
      open={open}
      sx={sx}
      transformOrigin={transformOrigin}
    >
      {children}
    </Menu>
  )
}

export default MuiMenu

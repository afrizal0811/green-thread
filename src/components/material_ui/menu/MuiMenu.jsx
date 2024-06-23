import Menu from '@mui/material/Menu'
import React from 'react'
const MuiMenu = (props) => {
  const {
    anchorEl,
    anchorOrigin,
    children,
    className,
    display,
    id,
    keepMounted,
    onClose,
    open,
    sx,
    transformOrigin,
  } = props

  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={anchorOrigin}
      className={className}
      display={display}
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

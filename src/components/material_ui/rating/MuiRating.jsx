import Rating from '@mui/material/Rating'
import React from 'react'
const MuiRating = (props) => {
  const { value, name, readOnly, size } = props
  return (
    <Rating
      name={name}
      readOnly={readOnly}
      value={value}
      size={size}
    />
  )
}

export default MuiRating

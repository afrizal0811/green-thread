import Typography from '@mui/material/Typography'
import React from 'react'
import { StyledMenuItem } from './StyledComponents'
const MuiMenuItem = (props) => {
  const { text, key, onClick, textAlign, selected, isHasHeroImage } = props
  return (
    <StyledMenuItem
      $isHasHeroImage={isHasHeroImage}
      key={key}
      onClick={onClick}
      selected={selected}
    >
      <Typography
        variant='p'
        textAlign={textAlign}
      >
        {text}
      </Typography>
    </StyledMenuItem>
  )
}

export default MuiMenuItem

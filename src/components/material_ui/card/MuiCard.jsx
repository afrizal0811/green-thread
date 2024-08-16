import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import React from 'react'
import { Typography } from '../../material_ui'
const MuiCard = (props) => {
  const { alt, src, title, text, height, sx } = props
  return (
    <Card sx={sx}>
      <CardMedia
        alt={alt}
        component='img'
        height={height}
        image={src}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant='h6'
        >
          {title}
        </Typography>
        <Typography
          variant='p'
          color='text.secondary'
        >
          {text}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default MuiCard

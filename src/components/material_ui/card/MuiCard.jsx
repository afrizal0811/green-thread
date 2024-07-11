import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import React from 'react'
const MuiCard = (props) => {
  const { alt, src, title, text, height, sx } = props
  return (
    <Card sx={sx}>
      <CardMedia
        component='img'
        alt={alt}
        height={height}
        image={src}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant='h5'
          component='div'
        >
          {title}
        </Typography>
        <Typography
          variant='body2'
          color='text.secondary'
        >
          {text}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default MuiCard

import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import React from 'react'

const MuiImageList = (props) => {
  const { item, height, width, variant, cols, gap, isTitle } = props
  return (
    <ImageList
      variant={variant}
      cols={cols}
      gap={gap}
    >
      {item.map((item) => (
        <ImageListItem key={item.src}>
          <img
            srcSet={item.src}
            src={item.src}
            alt={item.src}
            loading='lazy'
            style={{ height: height, width: width }}
          />
          {isTitle && <ImageListItemBar title={item.title} />}
        </ImageListItem>
      ))}
    </ImageList>
  )
}

export default MuiImageList

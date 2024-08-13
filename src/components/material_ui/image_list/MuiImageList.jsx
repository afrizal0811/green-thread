import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import React from 'react'

const MuiImageList = (props) => {
  const { item } = props
  return (
    <ImageList
      variant='masonry'
      cols={3}
      gap={10}
    >
      {item.map((item) => (
        <ImageListItem key={item.src}>
          <img
            srcSet={item.src}
            src={item.src}
            alt={item.src}
            loading='lazy'
          />
        </ImageListItem>
      ))}
    </ImageList>
  )
}

export default MuiImageList

import React from 'react'

const Image = (props) => {
  const { src, alt, width, height } = props
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  )
}

export default Image

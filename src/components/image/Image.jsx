import React from 'react'

const Image = (props) => {
  const { src, alt, width, height, className } = props
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  )
}

export default Image

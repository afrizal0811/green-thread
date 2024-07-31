import React from 'react'
import Slider from 'react-slick'
const Carousel = (props) => {
  const { children, settings } = props

  return (
    <Slider
      {...settings}
      style={{ width: '90%' }}
    >
      {children}
    </Slider>
  )
}

export default Carousel

import React from 'react'
import imagePath from '../constants/imagePaths'
import Image from '../components/image/Image'
const HomePage = () => {
  return (
    <div>
      <Image
        src={imagePath.heroImage}
        alt='hero-image'
        width='100%'
        height='100%'
      />
    </div>
  )
}

export default HomePage

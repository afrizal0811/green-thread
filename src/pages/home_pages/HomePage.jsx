import React from 'react'
import imagePath from '../../constants/imagePaths'
import { StyledHeroImage } from './StyledComponents'
const HomePage = () => {
  return (
    <div>
      <StyledHeroImage $src={imagePath.heroImage} />
    </div>
  )
}

export default HomePage

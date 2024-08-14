import React from 'react'
import imagePath from '../../constants/imagePaths'
import pagesLink from '../../constants/pagesLink'
import pageConvertor from '../../utilities/pageConvertor'
import { Box, Image, Typography } from '../material_ui'
import { StyledFooter, StyledIcon, StyledLink } from './StyledComponents'
import { socialMedias } from './help'

const Footer = () => {
  const renderLogoTitle = (
    <Box
      display='flex'
      alignItems='center'
      justifyContent='center'
      gap
    >
      <Image
        src={imagePath.logo}
        alt='logo'
        width={50}
        height={50}
      />
      <Typography
        variant='h3'
        sx={{
          pt: '10px',
        }}
        fontSize={{ xs: '32px', sm: '40px' }}
      >
        Green Threads
      </Typography>
    </Box>
  )

  const renderSocialMedias = (
    <Box
      display='flex'
      alignItems='center'
      justifyContent='center'
      gap={2}
    >
      {socialMedias.map((data) => (
        <a
          href={data.url}
          key={data.name}
          target='_blank'
          rel='noreferrer'
        >
          <StyledIcon
            display='flex'
            alignItems='center'
            justifyContent='center'
          >
            {data.icon}
          </StyledIcon>
        </a>
      ))}
    </Box>
  )

  const renderLinks = (
    <Box
      display='flex'
      alignItems='center'
      justifyContent='center'
      gap={{ xs: 2, sm: 4 }}
    >
      {pagesLink.map((data) => (
        <StyledLink
          key={data}
          to={`/${pageConvertor(data)}`}
        >
          <Typography variant='p'>{data}</Typography>
        </StyledLink>
      ))}
    </Box>
  )

  return (
    <StyledFooter
      display='flex'
      flexDirection='column'
      gap={3}
    >
      {renderLogoTitle}
      {renderSocialMedias}
      {renderLinks}
    </StyledFooter>
  )
}

export default Footer

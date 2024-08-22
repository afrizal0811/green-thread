import React from 'react'
import { pagesLink } from '../../constants/lists'
import BrandLogo from '../brand_logo/BrandLogo'
import { Box, Typography } from '../material_ui'
import {
  StyledBox,
  StyledDivider,
  StyledFooter,
  StyledIcon,
  StyledLink,
} from './StyledComponents'
import { socialMedias } from './help'

const Footer = (props) => {
  const { context } = props
  const { navigate } = context

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
          to={`/${data}`}
        >
          <Typography variant='p'>{data}</Typography>
        </StyledLink>
      ))}
    </Box>
  )

  return (
    <Box>
      <StyledBox
        display='flex'
        justifyContent='center'
      >
        <StyledDivider />
      </StyledBox>
      <StyledFooter
        display='flex'
        flexDirection='column'
        gap={3}
      >
        <BrandLogo
          display='flex'
          fontSize={{ xs: '32px', sm: '40px' }}
          imageHeight={50}
          imageWidth={50}
          justifyContent='center'
          navigate={navigate}
        />
        {renderSocialMedias}
        {renderLinks}
      </StyledFooter>
    </Box>
  )
}

export default Footer

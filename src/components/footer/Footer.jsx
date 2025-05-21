import React from 'react'
import { Link } from 'react-router-dom'
import { pagesLink } from '../../constants/lists'
import BrandLogo from '../brand_logo/BrandLogo'
import { Box, Divider, Typography } from '../material_ui'
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
          <Box
            className='rounded-full bg-transparent border-2 border-black w-[50px] h-[50px] hover:bg-forest-green-dark hover:border-forest-green-dark hover:text-pastel-gray cursor-pointer transition ease-in-out duration-200'
            display='flex'
            alignItems='center'
            justifyContent='center'
          >
            {data.icon}
          </Box>
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
        <Link
          key={data}
          to={`/${data.toLocaleLowerCase()}`}
        >
          <Typography variant='p'>{data}</Typography>
        </Link>
      ))}
    </Box>
  )

  return (
    <Box>
      <Box
        className='mt-12'
        display='flex'
        justifyContent='center'
      >
        <Divider className='w-4/5 !border-black ' />
      </Box>
      <Box
        display='flex'
        flexDirection='column'
        gap={3}
        className='py-8'
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
      </Box>
    </Box>
  )
}

export default Footer

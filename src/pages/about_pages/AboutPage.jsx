import React from 'react'
import { Box, Image, Typography } from '../../components/material_ui'
import imagePath from '../../constants/imagePaths'
import { commitList, coreData, storyData, teamData, teamList } from './help'

const AboutPage = () => {
  const renderTitle = (title, text) => {
    return (
      <Box
        display='flex'
        flexDirection='column'
        gap
      >
        <Typography variant='h2'>{title}</Typography>
        <Typography
          className='w-full md:w-3/5'
          variant='p'
        >
          {text}
        </Typography>
      </Box>
    )
  }
  const renderStory = (
    <Box
      display='flex'
      flexDirection='column'
      gap={5}
      className='h-screen text-white mx-5 md:mx-10'
      alignItems='center'
      justifyContent='center'
    >
      <div
        className='bg-no-repeat bg-top bg-cover absolute w-full h-screen -z-10 text-white overflow-hidden brightness-50 rounded-b-[50%_20%]'
        style={{
          backgroundImage: `url(${imagePath.office})`,
        }}
      />
      <Box className=''>{renderTitle(storyData.title, storyData.text)}</Box>
    </Box>
  )
  const renderCore = (
    <Box
      className='mx-5 md:mx-10'
      display='flex'
      flexDirection='column'
      gap={5}
    >
      {renderTitle(coreData.title, coreData.text)}
      <Box
        alignItems='stretch'
        display='flex'
        flexDirection='row'
        flexWrap='wrap'
        gap={5}
        justifyContent='center'
        className='*:flex-core'
      >
        {commitList.map((item) => (
          <Box
            className='bg-white p-12'
            alignItems='center'
            display='flex'
            flexDirection='column'
            gap={5}
            justifyContent='center'
            key={item.id}
          >
            <Image
              alt={item.name}
              className='aspect-square object-scale-down filter grayscale'
              height='auto'
              src={item.src}
              width={200}
            />
            <Box>
              <Typography
                alignItems='left'
                variant='h5'
              >
                {item.name}
              </Typography>
              <Typography variant='p'>{item.text}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
  const renderTeamList = (
    <Box
      className='mx-5 md:mx-10'
      display='flex'
      flexDirection='column'
      gap={5}
    >
      {renderTitle(teamData.title, teamData.text)}
      <Box
        alignItems='center'
        display='flex'
        flexWrap='wrap'
        gap={2}
        justifyContent='space-evenly'
        width='100%'
      >
        {teamList.map((item) => (
          <Box key={item.id}>
            <Box
              className='mb-4'
              display='flex'
              flexDirection='column'
              gap={2}
              width='100%'
            >
              <Image
                className='w-[300px] h-[350px] object-cover shadow-md md:w-[200px] md:h-[250px] lg:w-[300px] lg:h-[350px]'
                src={item.src}
              />
              <Typography variant='p'>{item.name}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )

  return (
    <Box
      display='flex'
      flexDirection='column'
      gap={5}
      width='100%'
    >
      {renderStory}
      {renderCore}
      {renderTeamList}
    </Box>
  )
}

export default AboutPage

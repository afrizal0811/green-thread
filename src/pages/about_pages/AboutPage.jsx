import React from 'react'
import { Box, Typography } from '../../components/material_ui'
import imagePath from '../../constants/imagePaths'
import {
  StyledCoreWrapper,
  StyledIcon,
  StyledIconWrapper,
  StyledOfficeImage,
  StyledPortrait,
} from './StyledComponents'
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
          variant='p'
          sx={{ width: { xs: '100%', sm: '60%' } }}
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
      sx={{ mx: '20px' }}
    >
      {renderTitle(storyData.title, storyData.text)}
      <StyledOfficeImage src={imagePath.office} />
    </Box>
  )
  const renderCore = (
    <Box
      display='flex'
      flexDirection='column'
      gap={5}
      sx={{ mx: '20px', mt: { xs: '-30px', sm: '-80px' } }}
    >
      {renderTitle(coreData.title, coreData.text)}
      <StyledCoreWrapper
        alignItems='stretch'
        display='flex'
        flexDirection='row'
        flexWrap='wrap'
        gap={5}
        justifyContent='center'
        sx={{ mx: '20px' }}
      >
        {commitList.map((item) => (
          <StyledIconWrapper
            alignItems='center'
            display='flex'
            flexDirection='column'
            gap={5}
            justifyContent='center'
            key={item.id}
          >
            <StyledIcon
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
          </StyledIconWrapper>
        ))}
      </StyledCoreWrapper>
    </Box>
  )
  const renderTeamList = (
    <Box
      display='flex'
      flexDirection='column'
      gap={5}
      sx={{ mx: '20px' }}
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
              display='flex'
              flexDirection='column'
              gap={2}
              sx={{ mb: '20px' }}
              width='100%'
            >
              <StyledPortrait src={item.src} />
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
      sx={{ mt: '30px' }}
      width='100%'
    >
      {renderStory}
      {renderCore}
      {renderTeamList}
    </Box>
  )
}

export default AboutPage

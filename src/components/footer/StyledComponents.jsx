import { styled as muiStyled } from '@mui/material'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Box, Divider } from '../material_ui'

export const StyledBox = muiStyled(Box)`
    margin-top: 50px;
`
export const StyledDivider = muiStyled(Divider)`
    border-bottom-width: 1px;
    border-color: black;
    width: 80%;
`
export const StyledFooter = muiStyled(Box)`
  padding: 30px 0;
`
export const StyledIcon = muiStyled(Box)`
  border-radius: 50%;
  background-color: transparent;
  border: 2px solid black;
  color: black;
  width: 50px;
  height: 50px;
  &:hover > .icon {
    color: #d6d1c6;
  }
  &:hover {
    background-color: green;
    border: 2px solid green;
  }
  transition-duration: 0.2s;
  cursor: pointer;
`
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

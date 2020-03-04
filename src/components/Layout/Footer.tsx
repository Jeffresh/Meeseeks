import React from 'react'
import styled from 'styled-components'
import { Typography, Link, Container } from '@material-ui/core'
import { RFC } from '~Types/react'

const SFooter = styled.footer`
  padding: ${({ theme }) => theme.spacing(3, 2)};
  text-align: center;
  margin-top: auto;
  background-color: ${({ theme }) =>
    theme.palette.type === 'dark'
      ? theme.palette.grey[800]
      : theme.palette.grey[300]};
`

const Copyright: RFC = () => {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href=" ">
        Meeseeks.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'. '}
    </Typography>
  )
}

export const Footer = (): JSX.Element => {
  return (
    <SFooter>
      <Container maxWidth="sm">
        <Typography variant="body1">
          {'Proudly ♥ made on Intermission. '}
        </Typography>
        <Copyright />
      </Container>
    </SFooter>
  )
}

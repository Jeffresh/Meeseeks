import { Link as MUILink, Typography } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import InputBase from '@material-ui/core/InputBase'
import { fade } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import { Search } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const menu = [
  { name: 'Characters', url: '/character' },
  { name: 'Episodes', url: '/episode' },
  { name: 'Planets', url: '/planet' },
]

const MenuItem = styled(MUILink)`
  margin: ${({ theme }) => theme.spacing(1, 1.5)};
`

const SToolbar = styled(Toolbar)`
  flex-wrap: wrap;
`

const Searchbar = styled.div`
  position: relative;
  border-radius: ${({ theme }) => theme.shape.borderRadius};
  background-color: ${({ theme }) => fade(theme.palette.common.white, 0.15)};
  margin-left: 0px;
  margin-right: ${({ theme }) => theme.spacing(2)}px;
  width: 100%;
  &:hover {
    background-color: ${({ theme }) => fade(theme.palette.common.white, 0.25)};
  }
  ${({ theme }) => theme.breakpoints.up('sm')} {
    width: auto;
    margin-left: ${({ theme }) => theme.spacing(3)}px;
  }
`

const IconContainer = styled.div`
  width: ${({ theme }) => theme.spacing(7)}px;
  height: 100%;
  position: absolute;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
`

const InputSearch = styled(InputBase)`
  color: inherit;
  padding: ${({ theme }) => theme.spacing(1, 1, 1, 7)};
  transition: ${({ theme }) => theme.transitions.create('width')};
  width: 100%;
  ${({ theme }) => theme.breakpoints.up('md')} {
    width: 200px;
  }
`

export const Navbar = (): JSX.Element => {
  return (
    <AppBar position="static">
      <SToolbar>
        <Typography variant="h6" color="inherit" noWrap style={{ flexGrow: 1 }}>
          Meseeks-Icon
        </Typography>
        <Searchbar>
          <IconContainer>
            <Search />
          </IconContainer>
          <InputSearch
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Searchbar>
        <nav>
          {menu.map(item => (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <MenuItem variant="button" href="#" color="inherit" key={item.name}>
              <Link to={item.url}> {item.name}</Link>
            </MenuItem>
          ))}
        </nav>
      </SToolbar>
    </AppBar>
  )
}

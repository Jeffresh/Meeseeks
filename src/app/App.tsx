import { NoSsr } from '@material-ui/core'
import {
  StylesProvider,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/core/styles'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Footer } from '~Components/Footer'
import { Hello } from '~Components/Hello'
import { Navbar } from '~Components/Navbar'
import { theme } from '../theme'

export const App = (): JSX.Element => {
  return (
    <NoSsr>
      <StylesProvider injectFirst>
        <MuiThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            <Navbar />
            <Hello />
            <Footer />
          </ThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    </NoSsr>
  )
}

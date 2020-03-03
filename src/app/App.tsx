import { CssBaseline, NoSsr } from '@material-ui/core'
import {
  StylesProvider,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/core/styles'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Hello } from '~Components/Hello'
import { Layout } from '~Components/Layout'
import { theme } from '../theme'

export const App = (): JSX.Element => {
  return (
    <>
      <CssBaseline />
      <NoSsr>
        <StylesProvider injectFirst>
          <MuiThemeProvider theme={theme}>
            <ThemeProvider theme={theme}>
              <Layout>
                <Hello />
              </Layout>
            </ThemeProvider>
          </MuiThemeProvider>
        </StylesProvider>
      </NoSsr>
    </>
  )
}

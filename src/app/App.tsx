import { CssBaseline, NoSsr } from '@material-ui/core'
import {
  StylesProvider,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/core/styles'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Layout } from '~Components/Layout'
import { theme } from '../theme'
import { routes } from '../routes'

export const App = (): JSX.Element => {
  return (
    <>
      <CssBaseline />
      <NoSsr>
        <StylesProvider injectFirst>
          <MuiThemeProvider theme={theme}>
            <ThemeProvider theme={theme}>
              <BrowserRouter>
                <Layout>
                  <Switch>
                    {routes.map(props => (
                      // eslint-disable-next-line react/jsx-props-no-spreading
                      <Route {...props} />
                    ))}
                  </Switch>
                </Layout>
              </BrowserRouter>
            </ThemeProvider>
          </MuiThemeProvider>
        </StylesProvider>
      </NoSsr>
    </>
  )
}

import { CssBaseline, NoSsr } from '@material-ui/core'
import {
  StylesProvider,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/core/styles'
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Layout } from '~Components/Layout'
import { routes } from '../routes'
import { theme } from '../theme'

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

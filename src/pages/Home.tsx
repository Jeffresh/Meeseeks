import { Container, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'

const useStyles = makeStyles(theme => ({
  body: {
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}))

export const Home = (): JSX.Element => {
  const classes = useStyles()

  return (
    <Container maxWidth="sm" component="main" className={classes.body}>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="textPrimary"
        gutterBottom
      >
        Hello
      </Typography>

      <Typography
        variant="h5"
        align="center"
        color="textSecondary"
        component="p"
      >
        The best WebPage you even seen in your life, and in your death...
      </Typography>
    </Container>
  )
}

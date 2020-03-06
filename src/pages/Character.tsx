import { Grid } from '@material-ui/core'
import React from 'react'
import { Searchbar } from '~Components/Searchbar'
import { RFC } from '~Types/react'

export const Character: RFC = () => (
  <Grid justify="center" alignItems="center">
    <Searchbar />
  </Grid>
)

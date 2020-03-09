import { Grid } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Searchbar } from '~Components/Searchbar'
import { RFC } from '~Types/react'

export const Character: RFC = () => {
  const selector = useSelector(state => state)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({ type: 'FETCH_ALL_CHARACTER_REQUEST' })
  })

  console.warn(selector)

  return (
    <Grid justify="center" alignItems="center">
      <Searchbar />
    </Grid>
  )
}

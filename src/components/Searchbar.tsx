/* eslint-disable react/jsx-props-no-spreading */
import { TextField } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import { Clear } from '@material-ui/icons'
import { Autocomplete, AutocompleteProps } from '@material-ui/lab'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Character, getCharacter } from '~Api'

type SearchbarProps<T> = Omit<
  AutocompleteProps<T>,
  'renderInput' | 'closeIcon' | 'freeSolo' | 'disableOpenOnFocus' | 'options'
> & {
  placeholder?: string
}
// TODO: Implement data feching with redux
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Searchbar = <T extends any>({
  placeholder = 'Search...',
  ...props
}: SearchbarProps<T>): JSX.Element => {
  const [inputValue, setInputValue] = useState('')
  const [options, setOptions] = useState<Character[]>([])

  useEffect(() => {
    ;(async () => {
      let response: Character[]
      try {
        const { data } = await getCharacter({ name: inputValue })
        response = data.results || []
      } catch {
        response = []
      }
      setOptions(response)
    })()
  }, [inputValue])

  useEffect(() => {})
  return (
    <Autocomplete
      {...props}
      id="r&m-autocomplete"
      freeSolo
      disableOpenOnFocus
      options={options.map(option => option.name) as any}
      closeIcon={<CloseIcon />}
      renderInput={({ InputProps, ...parameters }) => (
        <Input
          {...parameters}
          InputProps={{ ...InputProps, disableUnderline: true }}
          fullWidth
          margin="normal"
          variant="outlined"
          placeholder={placeholder}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setInputValue(event.target.value)
          }}
        />
      )}
    />
  )
}

const CloseIcon = styled(Clear)`
  opacity: 0.54;
  color: ${grey[500]};
`

const Input = styled(TextField)`
  background-color: ${({ theme }) => theme.palette.background.paper};
  transition: ${({ theme }) => theme.transitions.create('box-shadow')};
  box-shadow: ${({ theme }) => theme.shadows[1]};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  input.MuiAutocomplete-inputFocused
    ~ fieldset.MuiOutlinedInput-notchedOutline {
    border-width: 0px;
  }
`

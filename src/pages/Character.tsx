import React, { useState } from 'react'
import { AxiosResponse } from 'axios'
import { RFC } from '~Types/react'
import * as api from '../services/api'

export const Character: RFC = () => {
  const [CharacterList, SetCharacterList] = useState()
  const listCharacters = (characters: api.Character[]): JSX.Element => {
    return (
      <div>
        {characters.map((character: api.Character) => (
          <div key={character.id}>
            <p>Id: {character.id}</p>
            <p>Name: {character.name}</p>
            <p>Episodes:{character.episode}</p>
          </div>
        ))}
      </div>
    )
  }
  const characters = async (): Promise<AxiosResponse<any>> => api.getCharacter()
  useState(
    characters()
      .then(r =>
        SetCharacterList(listCharacters(r.data.results).props.children),
      )
      .catch(),
  )

  return <>{CharacterList}</>
}

import React from 'react'
import * as S from './styled'
import CreateItemBox from './CreateItemBox'

export default function Todos() {
  return (
    <S.Container>
      <S.Title>Todo List</S.Title>
      <CreateItemBox />
    </S.Container>
  )
}


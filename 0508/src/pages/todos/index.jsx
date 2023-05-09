import React, { useEffect } from 'react'
import * as S from './styled'
import CreateItemBox from './CreateItemBox'
import ItemList from './ItemList'

import { useState } from 'react'

export default function Todos() {
  const [todoName, setTodoName] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log(todoName);
  }, [todoName])
  

  return (
    <S.Container>
      <S.Title>Todo List</S.Title>
      <CreateItemBox onChange={setTodoName} />
      <ItemList />
    </S.Container>
  )
}


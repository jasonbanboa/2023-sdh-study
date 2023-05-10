import React from 'react'
import * as S from './styled'
import Todo from '../../../components/Todo'

export default function ItemList({ todos, deleteTodo }) {
  
  return (
    <S.ItemList>
    {todos.map(({ id, name }) => {
      return <Todo key={id} deleteTodo={() => deleteTodo(id)}>{name}</Todo>
    })}
    </S.ItemList>
  )
}

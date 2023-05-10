import React, { useEffect } from 'react'
import * as S from './styled'
import CreateItemBox from './CreateItemBox'
import ItemList from './ItemList'
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react'

export default function Todos() {
  const [todoName, setTodoName] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    console.log(todoName);
  }, [todoName]);

  const createTodo = () => { 
    setTodoName('');
    setTodos(prevState => [...prevState, {id: uuidv4(), name: todoName }]);
  }

  const deleteTodo = (id) => {
    const findIndex = todos.findIndex(v => v.id === id);
    setTodos(prevState => {
      const tempArr = [...prevState];
      tempArr.splice(findIndex, 1);
      return tempArr;
    });
  }

  return (
    <S.Container>
      <S.Title>Todo List</S.Title>
      <CreateItemBox value={todoName} onChange={setTodoName} createTodo={createTodo} />
      <ItemList todos={todos} deleteTodo={deleteTodo} />
    </S.Container>
  )
}


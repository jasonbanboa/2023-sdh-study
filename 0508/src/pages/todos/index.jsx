import React, { useEffect } from 'react'
import * as S from './styled'
import CreateItemBox from './CreateItemBox'
import ItemList from './ItemList'
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react'

export default function Todos() {
  const [todoName, setTodoName] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const TODOS_FORM_LOCALSTORAGE = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(TODOS_FORM_LOCALSTORAGE);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

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
      <CreateItemBox searchQuery={searchQuery} setSearchQuery={setSearchQuery} value={todoName} onChange={setTodoName} createTodo={createTodo} />
      <ItemList searchQuery={searchQuery} todos={todos} deleteTodo={deleteTodo} />
    </S.Container>
  )
}


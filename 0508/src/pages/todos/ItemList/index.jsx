import * as S from './styled'
import Todo from '../../../components/Todo'

export default function ItemList({ todos, deleteTodo, searchQuery, setSelectedTodosID }) {
  const filteredTodos = todos.filter(({ name }) => name.includes(searchQuery)); 

  const handleSelected = (id) => {
    setSelectedTodosID(prevState => prevState.includes(id) ? prevState.filter(prevStateId => id !== prevStateId) : [...prevState, id]);
  } 

  return (  
    <S.ItemList>
    {filteredTodos.map(({ id, name }) => 
      <Todo key={id} handleSelected={() => handleSelected(id)} deleteTodo={() => deleteTodo(id)}>{name}</Todo>
    )}
    </S.ItemList>
  )
}

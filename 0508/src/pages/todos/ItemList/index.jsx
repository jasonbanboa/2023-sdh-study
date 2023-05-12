import * as S from './styled'
import Todo from '../../../components/Todo'

export default function ItemList({ todos, deleteTodo, searchQuery }) {
  const filteredTodos = todos.filter(({ name }) => name.includes(searchQuery)); 

  return (
    <S.ItemList>
    {filteredTodos.map(({ id, name }) => 
      <Todo key={id} deleteTodo={() => deleteTodo(id)}>{name}</Todo>
    )}
    </S.ItemList>
  )
}

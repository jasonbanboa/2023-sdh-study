import * as S from './styled'
import Button from '../Button'
import Checkbox from '../Cehckbox';

export default function Todo({ children, deleteTodo, handleSelected }) {
  return (
    <S.Container>
      <Checkbox onChange={handleSelected}/>
      <S.Title>{children}</S.Title>
      <Button onClick={deleteTodo}>삭제</Button>
    </S.Container>
  );
}
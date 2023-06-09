import * as S from './styled'
import Button from '../Button'

export default function Todo({ children, deleteTodo }) {
  return (
    <S.Container>
      <S.Title>{children}</S.Title>
      <Button onClick={deleteTodo}>삭제</Button>
    </S.Container>
  );
}
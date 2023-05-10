import React from 'react'
import * as S from './styled'
import Button from '../../../components/Button'

export default function CreateItemBox({ value, onChange, createTodo }) {

  const handleInput = (e) => {
    onChange(e.target.value);
  }

  return (
    <S.InputBox>
      <S.Input value={value} onChange={handleInput} placeholder="Todo를 입력해주세요" />
      <Button onClick={createTodo} disabled={!value.trim()}>등록</Button>
    </S.InputBox>
  )
}

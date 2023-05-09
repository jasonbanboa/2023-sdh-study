import React from 'react'
import * as S from './styled'
import Button from '../../../components/Button'

export default function CreateItemBox({ onChange }) {

  const handleInput = (e) => {
    onChange(e.target.value);
  }

  return (
    <S.InputBox>
      <S.Input onChange={handleInput} placeholder="Todo를 입력해주세요" />
      <Button>등록</Button>
    </S.InputBox>
  )
}

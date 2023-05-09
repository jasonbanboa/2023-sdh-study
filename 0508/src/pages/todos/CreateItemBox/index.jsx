import React from 'react'
import * as S from './styled'
import { useState, useEffect } from 'react'

export default function CreateItemBox() {
  const [input, setInput] = useState('');

  useEffect(() => {
    console.log(input);
  }, [input]);

  const handleInput = (e) => {
    setInput(e.target.value);
  }

  return (
    <S.InputBox>
      <S.Input onInput={handleInput} value={input} placeholder="Todo를 입력해주세요" />
    </S.InputBox>
  )
}

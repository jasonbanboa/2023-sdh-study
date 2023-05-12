import React from 'react'
import * as S from './styled'
import Button from '../../../components/Button'

export default function CreateItemBox({ value, onChange, createTodo, searchQuery, setSearchQuery }) {
  
  const handleInput = (e) => {
    onChange(e.target.value);
  }

  const handleEnterPress = (e) => {
    const input = e.target.value;
    if (!input.trim()) 
      return;
    
    if (e.key === 'Enter') 
      createTodo();
  }

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  } 

  return (
    <>
      <S.Input onChange={handleSearch} placeholder="Todo를 검색 해주세요" value={searchQuery}/>
      <S.InputBox>
        <S.Input onKeyUp={handleEnterPress} value={value} onChange={handleInput} placeholder="Todo를 입력해주세요" />
        <Button onClick={createTodo} disabled={!value.trim()}>등록</Button>
      </S.InputBox>
    </>
  )
}

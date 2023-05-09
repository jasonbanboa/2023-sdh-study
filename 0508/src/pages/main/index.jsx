import React from 'react'
import Button from '../../components/Button'
import * as S from './styled'

export default function Main() {
  return (
    <S.Container>
      <S.MainWrapper>
        <div>메인페이지</div>
        <Button>만들기</Button>
      </S.MainWrapper>
    </S.Container>
  )
}

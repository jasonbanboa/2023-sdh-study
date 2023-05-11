import React from 'react'
import Button from '../../components/Button'
import * as S from './styled'
import { Link } from 'react-router-dom'


export default function Main() {
  return (
    <S.Container>
      <S.MainWrapper>
        <div>메인페이지</div>
        <Button><Link to="/todos">만들기</Link></Button>
      </S.MainWrapper>
    </S.Container>
  )
}

import * as S from './styled'
import React from 'react'

export default function Button(props) {
  return (
    <S.Button {...props}>{props.children}</S.Button>
  );
}



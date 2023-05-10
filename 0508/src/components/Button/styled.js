
import styled from 'styled-components'

export const Button = styled.button`
  white-space: nowrap;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: transparent;
  padding: 5px 10px;
  border: 1px solid #eee;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
  }
`;
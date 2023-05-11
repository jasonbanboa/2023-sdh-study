import styled from 'styled-components'
import { Button } from '../../components/Button/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;


export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  box-shadow: 0 0 5px rgba(0,0,0,0.3);
  border-radius: 3px;  
  > div {
    font-size: 24px;
    font-weight: 600;
  }
  > ${Button} {
    padding: 8px 10px;
    border: none;
    transition: all .25s;
    &:hover {
      background-color: transparent;
    }
  }
  a {
    color: #333;
    text-decoration: none;
  }
`;
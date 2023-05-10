import styled from "styled-components";

export const Container = styled.li`
  font-color: #666;
  width: 100%;
  list-style: none;
  gap: 1rem;
  border: 1px solid #eee;
  padding: 10px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0,0,0,.2);
  > p {
    margin-right: auto;
  }
`;

export const Title = styled.p`
  font-size: 1rem;
`;

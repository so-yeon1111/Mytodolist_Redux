import React from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Detail = () => {
  const param = useParams();
  const navigate = useNavigate();

  const todos = useSelector((state) => state.todos);

  return (
    <StDetailContainer>
      <StDetailBox>
        <StHeadContainer>
          <h2>{param.id}</h2>
          <StButton onClick={() => navigate("/")}>이전으로</StButton>
        </StHeadContainer>

        {todos.map((todo) => {
          // pram.id의 타입은 문자열, todo.id는 숫자여서 형변환
          if (todo.id === parseInt(param.id)) {
            return (
              <StTodoDescBox>
                <h2>{todo.title}</h2>
                <p>{todo.body}</p>
              </StTodoDescBox>
            );
          } else {
            return null;
          }
        })}
      </StDetailBox>
    </StDetailContainer>
  );
}

export default Detail;

const StDetailContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FAF6E9;
`;

const StDetailBox = styled.div`
  border: 3px solid #494949;
  border-radius: 20px;
  background-color: #FFFDF6;
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  padding: 50px;
`;

const StHeadContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > h3 {
    color: black;
  }
`;

const StButton = styled.button`
  display: inline-block;
  border: none;
  border-radius: 20px;
  width: 120px;
  height: 40px;
  cursor: pointer;
  font-weight: bold;
  background-color: #494949;
  color: white;
`;

const StTodoDescBox = styled.div`
  & > h1,
  p {
    color: black;
  }
`;
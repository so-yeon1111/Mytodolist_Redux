import React from "react";
import styled from "styled-components";

import { useSelector } from "react-redux"; //useSelector 훅 임포트, state값을 조회한다
import { useDispatch } from "react-redux"; //useDispatch 훅 임포트, 액션명령을 주고 받는다
import { updateTodo, deleteTodo } from "../redux/modules/todos"; // 액션객체 임포트
import { useNavigate } from "react-router-dom"; // 페이지 이동을 위한 useNavigate훅 임포트

function List() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const todoStore = useSelector((state) => state.todos); //store 연결확인

  // dispatch로 명령 전달
  const onDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  const onToggle = (id) => {
    dispatch(updateTodo(id));
  };

  return (
    <StList>
      <Title>📃 Working 📃</Title>
      <TodoContainer>
        {todoStore.map((todo) => {
          if (todo.isDone === false) {
            return (
              <Todo key={todo.id}>
                <StDetailBtn onClick={() => navigate(`/detail/${todo.id}`)}>
                  상세내용
                </StDetailBtn>
                <TodoTitle>{todo.title}</TodoTitle>
                <p>{todo.body}</p>
                <ButtonSet>
                  <Button onClick={() => onDelete(todo.id)}>삭 제</Button>
                  <Button onClick={() => onToggle(todo.id)}>
                    {todo.isDone ? "취 소" : "완 료"}
                  </Button>
                </ButtonSet>
              </Todo>
            );
          } else {
            return null;
          }
        })}
      </TodoContainer>

      <Title>🥇 Done 🥇</Title>
      <TodoContainer>
        {todoStore.map((todo) => {
          if (todo.isDone === true) {
            return (
              <Todo key={todo.id}>
                <StDetailBtn onClick={() => navigate(`/detail/${todo.id}`)}>
                  상세내용
                </StDetailBtn>
                <TodoTitle>{todo.title}</TodoTitle>
                <p>{todo.body}</p>
                <ButtonSet>
                  <Button onClick={() => onDelete(todo.id)}>삭 제</Button>
                  <Button onClick={() => onToggle(todo.id)}>
                    {todo.isDone ? "취 소" : "완 료"}
                  </Button>
                </ButtonSet>
              </Todo>
            );
          } else {
            return null;
          }
        })}
      </TodoContainer>
    </StList>
  );
}

export default List;
const StList = styled.div`
  padding: 0 24px;
`;

const Title = styled.h2`
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;

  text-align: center;
  padding: 15px;
`;

const TodoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const Todo = styled.div`
  border: 4px solid teal;
  border-radius: 12px;
  padding: 12px 24px 24px;
  width: 270px;
`;

const StDetailBtn = styled.button`
  float: right; // 오른쪽 상단으로 버튼을
  box-sizing: border-box;
  border-radius: 20px;
  border: none;
  padding: 5px 10px;
  width: 90px;
  cursor: pointer;
  &:hover {
    width: 100px;
  }
`;

const TodoTitle = styled.h2`
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
`;

const ButtonSet = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 24px;
`;

const Button = styled.button`
  border-radius: 8px;
  cursor: pointer;
  height: 40px;
  width: 50%;
  background-color: #fff;
  border: 2px solid
`;
import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleStatusTodo, deleteTodo } from "../redux/modules/todos";
import { useNavigate } from "react-router-dom";

const List = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const todoStore = useSelector((state) => state.todos);

  const onDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  
  const onToggle = (id) => {
    dispatch(toggleStatusTodo(id));
  };

  return (
    <StList>
      {/* <Title>Working</Title> */}
      <TodoContainer>
        {todoStore.map((todo) => {
          if (todo.isDone === false) {
            return (
              <Todo key={todo.id}>
                <StDetailBtn onClick={() => navigate(`/detail/${todo.id}`)}>
                  상세보기
                </StDetailBtn>
                <TodoTitle>{todo.title}</TodoTitle>
                <p>{todo.body}</p>
                <ButtonSet>
                  <Button bg={"#FAF6E9"} onClick={() => onDelete(todo.id)}>
                    삭 제
                  </Button>
                  <Button bg={"#F3C5C5"} onClick={() => onToggle(todo.id)}>
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

      {/* <Title>Done</Title> */}
      <TodoContainer >
        {todoStore.map((todo) => {
          if (todo.isDone === true) {
            return (
              <Todo key={todo.id} style={{backgroundColor:"rgba(0,0,0,0.5)"}}>
                <StDetailBtn co={"gray"} onClick={() => navigate(`/detail/${todo.id}`)}>
                  상세보기
                </StDetailBtn>
                <TodoTitle>{todo.title}</TodoTitle>
                <p>{todo.body}</p>
                <ButtonSet>
                  <Button bg={"#423F3E"} co={"gray"} onClick={() => onDelete(todo.id)}>
                    삭 제
                  </Button>
                  <Button bg={"#2B2B2B"} co={"gray"} onClick={() => onToggle(todo.id)}>
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
};

export default List;
const StList = styled.div`
  padding: 0 24px;
`;

// const Title = styled.div`
//   display: flex;
//   justify-content: center;
//   font-size: 1.5em;
//   font-weight: bold;
//   margin: 10px auto;
//   height: 40px;
//   width: 200px;
//   border-radius: 15px;
//   background-color: #999B84;
//   padding: 10px;
// `;

const TodoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin: 20px auto auto 50px;
  padding: 0 0 20px 0;
`;

const Todo = styled.div`
  border: 4px solid #494949;
  border-radius: 12px;
  padding: 12px 24px 24px;
  width: 270px;
  background-color: #fffdf6;
  background-color: ${(props)=>props.rgba};
  margin: 0 30px 30px 0;
  box-shadow: 5px 5px 5px 5px gray;
`;

const StDetailBtn = styled.button`
  box-sizing: border-box;
  border-radius: 15px;
  border: none;
  padding: 7px 10px;
  margin: 10px 0 0 0;
  width: 90px;
  color: white;
  background-color: #494949;
  cursor: pointer;
  color: ${(props)=>props.co}
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
  border: none;
  cursor: pointer;
  height: 40px;
  width: 50%;
  font-weight: bold;
  background-color: ${(props) => props.bg};
  color: ${(props)=>props.co};
`;

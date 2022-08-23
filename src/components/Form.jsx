import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todos"; //액션객체 임포트

let nextId = 3;

function Form() {
  // dispatch 생성
  const dispatch = useDispatch();

  // input을 통해 들어오는 변화값을 받는 state
  const [todo, setTodo] = useState({
    id: 0,
    title: "",
    body: "",
    isDone: false,
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value, id: nextId });
  };


  const onSubmitHandler = (e) => {
    e.preventDefault();
    nextId++; 
    dispatch(addTodo({ ...todo }));
    setTodo({ id: 0, title: "", body: "", isDone: false });
  };

  return (
    <StForm onSubmit={onSubmitHandler}>
      <Container>
        <Label>제목</Label>
        <InputBox
          type="text"
          name="title"
          value={todo.title}
          onChange={onChangeHandler}
          required
        />
        <Label>내용</Label>
        <InputBox
          type="text"
          name="body"
          value={todo.body}
          onChange={onChangeHandler}
        />
      </Container>
      <Button>추가하기</Button>
    </StForm>
  );
}

export default Form;

const StForm = styled.form`
  background-color: #ECE8D9;
  border-radius: 12px;
  justify-content: space-between;
  margin: 20px auto 50px auto;
  padding: 30px;
  align-items: center;
  display: flex;
  gap: 20px;
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  gap: 20px;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: 700;
  cursor: default;
`;

const Button = styled.button`
  background-color: #494949;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-weight: 700;
  height: 40px;
  width: 140px;
`;

const InputBox = styled.input`
  border: none;
  border-radius: 12px;
  height: 40px;
  padding: 0 12px;
  width: 240px;
`;
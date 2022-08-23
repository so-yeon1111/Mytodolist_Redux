// Action value
const ADD_TODO = "todos/ADD_TODO";
const DELETE_TODO = "todos/DELETE_TODO";
const TOGGLE_STATUS_TODO = "todos/TOGGLE_STATUS_TODO";

// Action Creator
// Todo 추가
export const addTodo = (payload) => {

  return {
    type: ADD_TODO,
    payload,
  };
};

// Todo 삭제
export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

// isDone을 변경
export const toggleStatusTodo = (payload) => {
  return {
    type: TOGGLE_STATUS_TODO,
    payload,
  };
};

// 초기값
const initialState = [
  { 
    id: 1, 
    title: "Redux로 Todolist 만들기", 
    body: "에러 저리갓 ", 
    isDone: false 
  },
  { 
    id: 2, 
    title: "9시 출석체크", 
    body: "일어나~!!!", 
    isDone: true 
  },
];

// Reducer: todos
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = [...state, action.payload];
      return newTodo;

    case DELETE_TODO:
      const remainedTodo = state.filter((todo) => todo.id !== action.payload);
      return remainedTodo;

    case TOGGLE_STATUS_TODO:
      const toggleStatusTodo = state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, isDone: !todo.isDone }; 
        } else {
          return { ...todo };
        }
      });
      return toggleStatusTodo;

    default:
      return state;
  }
};

// 모듈에서 reducer를 export default
export default todos;
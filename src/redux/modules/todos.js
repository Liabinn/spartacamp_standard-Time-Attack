// import uuid from "react-uuid";
import shortid from "shortid";

const initialState = [
  {
    id: shortid.generate(),
    title: "",
    contents: "",
    isDone: false,
  },
];

// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload]; //TODO: 여기 작성

    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload); //TODO: 여기 작성

    case "SWITCH_TODO":
      return state.map((todo) => {
        if(todo.id === action.payload) {
          return {...todo, isDone: !todo.isDone}
        } else {
          return todo
        }
      }); //TODO: 여기 작성

    default:
      return state;
  }
};

export default todos;

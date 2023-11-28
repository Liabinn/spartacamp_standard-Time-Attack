import React from 'react'
import { useDispatch, useSelector } from "react-redux";

function TodoList({isDone}) {

  const todos = useSelector((state) => {
    return state.todos
  })

  const dispatch = useDispatch();
  
  return (
    <div>
      <h2>{isDone === false ? '진행중':'완료🎉'}</h2>
      {todos.filter(todo => todo.isDone === isDone)
      .map((todo) => {
        return (
          <div key={todo.id}>
            <h3>{todo.title}</h3>
            <p>{todo.contents}</p>
            <button onClick={() => {
              dispatch({
                type: "SWITCH_TODO",
                payload: todo.id
              })
            }}>{isDone === true ? '취소' : '완료'}</button>
            <button onClick={() => {
              dispatch({
                type: 'DELETE_TODO',
                payload: todo.id
              })
            }}>삭제</button>
          </div>
        )
      })}
    </div>
  )
}

export default TodoList
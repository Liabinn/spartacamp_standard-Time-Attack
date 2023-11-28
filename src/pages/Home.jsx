import React from "react";
import Form from "../component/Form";
import TodoList from "../component/TodoList";

const Home = () => {

  return (
    <div>
      <header><h1>Todo List😉</h1></header>
      <main>
        <Form />
        <TodoList isDone={false}/>
        <TodoList isDone={true}/>
      </main>
    </div>
  )
};

export default Home;

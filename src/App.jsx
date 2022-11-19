import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateTodo from "./CreateTodo";
import TodoCard from "./TodoCard";

import "./App.css";
//function components a function that return a jsx and have options(hooks)

export default function App() {
  const todos = [
    {
      id: "1",
      title: "hello",
      status: "undone",
    },
    {
      id: "2",
      title: "salam",
      status: "undone",
    },
    {
      id: "3",
      title: "hey",
      status: "undone",
    },
    {
      id: "4",
      title: "hi",
      status: "undone",
    },
  ];

  //jsx ---> js + xml(html)
  return (
    <>
      <Header />

      <main>
        <CreateTodo />

        <div class="todo-list">
          <div class="todo-list-header">
            <button class="tab-btn undone-tab-btn">
              <span class="text-tab">undone</span>
              <span class="count-tab count-undone-tab">9</span>
            </button>

            <button class="tab-btn done-tab-btn">
              <span class="text-tab">done</span>
              <span class="count-tab count-done-tab">8</span>
            </button>
          </div>

          <div class="todo-list-body">
            {/* TodoCard("1", "hello") */}
            {/* <TodoCard id="1" title="hello" /> */}
            {/* todos.map(function(item){
                return <TodoCard id={item.id} title={item.title} /> 
              }) */}

            {todos.map((item) => (
              <TodoCard id={item.id} title={item.title} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

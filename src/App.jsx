import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateTodo from "./components/CreateTodo";
import TodoCard from "./components/TodoCard";

import "./App.css";

export default function App() {
  const todos = [
    {
      id: "1",
      title: "hello",
      status: false,
    },
    {
      id: "2",
      title: "salam",
      status: false,
    },
    {
      id: "3",
      title: "hey",
      status: false,
    },
    {
      id: "4",
      title: "hi",
      status: false,
    },
  ];

  const [todoList, setTodoList] = useState(todos);
  const [totalUndone, setTotalUndone] = useState(0);

  useEffect(() => {
    const undoneTodos = todoList.filter((item) => item.status === false);
    setTotalUndone(undoneTodos.length);
  }, [todoList]);

  const editTodo = (id, editedText) => {
    const newTodoList = todoList.map((item) => {
      if (item.id === id) {
        item.title = editedText;
      }
      return item;
    });

    setTodoList(newTodoList);
  };

  const changeStatus = (id) => {


    const newTodoList = todoList.map((item) => {
      if (item.id === id) {
        item.status = !item.status;
      }
      return item;
    });

    setTodoList(newTodoList);
  };

  const removeTodo = (id) => {
    const newTodoList = todoList.filter((item) => item.id !== id);

    setTodoList(newTodoList);
    // setTotalUndone(totalUndone - 1);
    // let newTodoListForEach=[];
    // let newTodoListMap=[];
    // let newTodoListFor=[];

    // for (let i = 0; i < todoList.length; i++) {
    //   if (todoList[i].id !== id) {
    //     newTodoListFor.push(todoList[i]);
    //   }

    // }

    //  todoList.forEach((item)=>{
    //     if (item.id !== id) {
    //       newTodoListForEach.push(item);
    //     }

    //   })

    //  todoList.map((item)=>{
    //     if (item.id !== id) {
    //       newTodoListMap.push(item);
    //     }
    //   })
    // console.log(newTodoListForEach);
    // console.log(newTodoListMap);
    // console.log(newTodoListFor);
  };

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      title: text,
      status: false,
    };
    // let newTodoList=todoList
    // newTodoList.push(newTodo)
    // setTodoList(newTodoList)
    setTodoList([newTodo, ...todoList]);
    // setTotalUndone(totalUndone + 1);
  };


  return (
    <>
      <Header />

      <main>
        <CreateTodo addTodo={addTodo} />

        <div className="todo-list">
          <div className="todo-list-header">
            <button className="tab-btn undone-tab-btn">
              <span className="text-tab">undone</span>
              <span className="count-tab count-undone-tab">{totalUndone}</span>
            </button>

            <button className="tab-btn done-tab-btn">
              <span className="text-tab">done</span>
              <span className="count-tab count-done-tab">
                {todoList.length - totalUndone}
              </span>
            </button>
          </div>

          <div className="todo-list-body">
            {todoList.map((item) => (
              <TodoCard
                key={item.id}
                {...item}
                removeTodo={removeTodo}
                editTodo={editTodo}
                changeStatus={changeStatus}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

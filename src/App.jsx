import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateTodo from "./components/CreateTodo";
import TodoCard from "./components/TodoCard";

import "./App.css";
//function components a function that return a jsx and have options(hooks)
// hook: 1- useState 2-useEffect 3-useQuery , ...
// customeHook: useZahra

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

  // let totalUndone=0;
  const [totalUndone, setTotalUndone] = useState(todos.length); //useState()
  const [todoList, setTodoList] = useState(todos);

  const changeStatus = (status) => {
  
    console.log("statussssss:", status);
    if (status) {
      setTotalUndone(totalUndone + 1);
    }else{
      setTotalUndone(totalUndone - 1);
    }

  };

  const removeTodo = (id) => {
    const newTodoList = todoList.filter((item) => item.id !== id);

    setTodoList(newTodoList);

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

  const addTodo =(id,text)=>{
    const newTodo= {
      id: id,
      title:text,
      status: false,
    }
    // let newTodoList=todoList
    // newTodoList.push(newTodo)
    // setTodoList(newTodoList)
    setTodoList([newTodo,...todoList])
  }

  //jsx ---> js + xml(html)
  return (
    <>
      <Header />

      <main>
        <CreateTodo addTodo={addTodo}/>

        <div className="todo-list">
          <div className="todo-list-header">
            <button className="tab-btn undone-tab-btn">
              <span className="text-tab">undone</span>
              <span className="count-tab count-undone-tab">{totalUndone}</span>
            </button>
            {/* <button onClick={btnClick}>Test Button</button> */}
            <button className="tab-btn done-tab-btn">
              <span className="text-tab">done</span>
              <span className="count-tab count-done-tab">{todoList.length-totalUndone}</span>
            </button>
          </div>

          <div className="todo-list-body">
            {todoList.map((item) => (
              <TodoCard
                key={item.id}
                {...item}
                removeTodo={removeTodo}
                title2="test"
                changeStatus={changeStatus}
                
              />
            ))}

            {/* <TodoCard id={item.id} title={item.title} /> */}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

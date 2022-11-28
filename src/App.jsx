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

  // let totalUndone=0;
  const [totalUndone, setTotalUndone] = useState(0); //useState()

  const btnClick = () => {
    setTotalUndone(totalUndone + 1);
    console.log(totalUndone); //0 1
  };

  //jsx ---> js + xml(html)
  return (
    <>
      <Header />

      <main>
        <CreateTodo />

        <div className="todo-list">
          <div className="todo-list-header">
            <button className="tab-btn undone-tab-btn">
              <span className="text-tab">undone</span>
              <span className="count-tab count-undone-tab">{totalUndone}</span>
            </button>

            <button className="tab-btn done-tab-btn">
              <span className="text-tab">done</span>
              <span className="count-tab count-done-tab">8</span>
            </button>
          </div>

          <button onClick={btnClick}>Test Button</button>

          <div className="todo-list-body">
            {/* TodoCard("1", "hello") */}
            {/* <TodoCard id="1" title="hello" /> */}
            {/* todos.map(function(item){
                return <TodoCard id={item.id} title={item.title} /> 
              }) */}

            {todos.map((item) => (
              <TodoCard {...item} />
            ))}
            {/* <TodoCard id={item.id} title={item.title} /> */}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

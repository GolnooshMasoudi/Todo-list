import React from "react";
import "./TodoCard.css";


const TodoCard = ({ id, title }) => {
  //    const props= {
  //         title:"¨hello",
  //         id:"1"
  //     }

  // const {id, title}= props
  const changeStatus =()=> {
    console.log("hello")
  }

  return (
    <div className="todo-card" id={id}>
      <p className="text-todo">{title}</p>
      <div>
        <button className="btn-card undone-btn" onClick={changeStatus}>undone</button>
        <button className="btn-card edit-btn">edit</button>
        <button className="btn-card delete-btn">delete</button>
      </div>
    </div>
  );
};

export default TodoCard;

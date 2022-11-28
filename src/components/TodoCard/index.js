import React, { useState } from "react";
import "./TodoCard.css";

const TodoCard = ({ id, title, status }) => {
  //    const props= {
  //         title:"¨hello",
  //         id:"1"
  //     }

  // const {id, title}= props

  const [statusBtn, setStatusBtn] = useState("undone");

  const changeStatus = () => {
    if (statusBtn === "undone") {
      setStatusBtn("done");
      console.log("status changed");
    } else {
      setStatusBtn("undone");
    }
  };

  return (
    <div className="todo-card" id={id}>
      <p className="text-todo">{title}</p>
      <div>
        <button className="btn-card undone-btn" onClick={changeStatus}>
          {statusBtn}
        </button>
        <button className="btn-card edit-btn">edit</button>
        <button className="btn-card delete-btn">delete</button>
      </div>
    </div>
  );
};

export default TodoCard;

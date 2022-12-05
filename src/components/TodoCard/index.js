import React, { useState } from "react";
import "./TodoCard.css";

const TodoCard = ({ id, title,status, removeTodo, changeStatus }) => {
  const [statusBtn, setStatusBtn] = useState(status);
 

  const handleChangeStatus = () => {
    

    changeStatus(statusBtn)
    console.log("statusBtn:",statusBtn);
   
    setStatusBtn(!statusBtn);
    
    // setTotalUndone(totalUndone + 1);
  };

  // const removeTodo =(id)=>{

  //   console.log(id);
  //     // todoList.filter((item)=>{
  //     //   if (item.id !== id) {
  //     //     return item;
  //     //   }
  //     // })

  //  }

  //  removeTodo(1)

  return (
    <div className="todo-card" id={id}>
      <p className="text-todo">{title}</p>
      <div>
        <button
          className={`btn-card ${
            statusBtn === true ? "done-btn" : "undone-btn"
          }`}
          onClick={handleChangeStatus}
        >
          {statusBtn === true ? "done" : "undone"}
        </button>
        {/* <button onClick={btnClick}>Test Button</button> */}
        <button className="btn-card edit-btn">edit</button>
        <button className="btn-card delete-btn" onClick={() => removeTodo(id)}>
          delete
        </button>
      </div>
    </div>
  );
};

export default TodoCard;

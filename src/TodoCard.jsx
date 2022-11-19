import React from "react";

const TodoCard = ({id, title}) => {
  //    const props= {
  //         title:"¨hello",
  //         id:"1"
  //     }

  // const {id, title}= props
  return (
    <div class="todo-card" id={id}>
      <p class="text-todo">{title}</p>
      <div>
        <button class="btn-card undone-btn">undone</button>
        <button class="btn-card edit-btn">edit</button>
        <button class="btn-card delete-btn">delete</button>
      </div>
    </div>
  );
};

export default TodoCard;

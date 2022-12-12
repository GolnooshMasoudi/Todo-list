import React, { useState } from "react";
import "./TodoCard.css";

const TodoCard = ({
  id,
  title,
  status,
  removeTodo,
  changeStatus,
  editTodo,
}) => {
  const [statusBtn, setStatusBtn] = useState(status);

  const [editMode, setEditMode] = useState(false);
  const [editedText, setEditedText] = useState(title);

  const handleChangeStatus = () => {
    changeStatus(id);

    setStatusBtn(!statusBtn);
  };
  const editHandler = (e) => {
    e.preventDefault();
    editTodo(id, editedText);
    setEditMode(false);
  };

  return (
    <>
      {editMode ? (
        <form className="todo-card" id={id}>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <div>
            <button
              type="submit"
              className="btn-card edit-btn"
              onClick={editHandler}
            >
              submit
            </button>
            <button
              className="btn-card delete-btn"
              onClick={() => setEditMode(false)}
            >
              cancel
            </button>
          </div>
        </form>
      ) : (
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

            <button
              className="btn-card edit-btn"
              onClick={() => setEditMode(true)}
            >
              edit
            </button>
            <button
              className="btn-card delete-btn"
              onClick={() => removeTodo(id)}
            >
              delete
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default TodoCard;

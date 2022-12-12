import React, { useState } from "react";
import "./CreateTodo.css";

const CreateTodo = ({ addTodo, handleTotalDone }) => {

  const [todoInfo, setTodoInfo] = useState({
    // id: "",
    text: "",
  });

  const [errors, setErrors] = useState("");

  const { text } = todoInfo;

  const clickAddBtn = (e) => {
    e.preventDefault();

    if (text === "") {
      setErrors("please fill the feild!");
    } else {

      addTodo(text);
      setTodoInfo({
        // id: "",
        text: "",
      });
      setErrors("");

    }


  };

  return (
    <div className="form-box">
      <h1 className="title-form">Welcome</h1>
      <p className="hint-form">To get started, add some items to your list:</p>

      <form action="" className="create-form">
        <div className="error">{errors}</div>
        
        <div className="form-group">
          <input
            type="text"
            placeholder="I want to do..."
            value={text}
            onChange={(e) => setTodoInfo({ ...todoInfo, text: e.target.value })}
          />

          <button type="submit" onClick={clickAddBtn}>
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTodo;

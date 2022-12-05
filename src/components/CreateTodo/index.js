import React, { useState } from "react";
import "./CreateTodo.css";

const CreateTodo = ({ addTodo }) => {
  // const [id, setId] = useState("");
  // const [text, setText] = useState("");

  const [todoInfo, setTodoInfo] = useState({
    id: "",
    text: "",
  });


  //state manager:
  //context ---> useContext
  // redux  ----> redux-toolkit

  const [errors, setErrors] = useState("");
  const { id, text } = todoInfo;

  const clickAddBtn = (e) => {
    e.preventDefault();
    // console.log(text);

    if (id === "" || text === "") {
      setErrors("please fill necessary fiels!");
    } else {
      addTodo(id, text);
      setTodoInfo({
        id: "",
        text: "",
      });
      setErrors("");
    }

    // setId("");
    // setText("");
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
            placeholder="id..."
            value={id}
            onChange={(e) => setTodoInfo({ ...todoInfo, id: e.target.value })}
          />
        </div>
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

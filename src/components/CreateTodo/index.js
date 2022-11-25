import React from "react";
import "./CreateTodo.css";



const CreateTodo = () => {

  const addTodo =(e) =>{
    e.preventDefault()
    console.log("add");
  }

  return (
    <div className="form-box">
      <h1 className="title-form">Welcome</h1>
      <p className="hint-form">To get started, add some items to your list:</p>

      <form action="" className="create-form">
        <div className="form-group">
          <input type="text" placeholder="I want to do..." />
          <button type="submit" onClick={addTodo}>Add</button>
        </div>
      </form>

    </div>
  );
};

export default CreateTodo;

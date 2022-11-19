import React from "react";

const CreateTodo = () => {
  return (
    <div class="form-box">
      <h1 class="title-form">Welcome</h1>
      <p class="hint-form">To get started, add some items to your list:</p>

      <form action="" class="create-form">
        <div class="form-group">
          <input type="text" placeholder="I want to do..." />
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default CreateTodo;

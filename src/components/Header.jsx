import React, { useState } from "react";

function Header() {
  const [loginBtn, setLoginBtn] = useState("login");




  const login = () => {
    console.log("successfull login");

    if (loginBtn === "login") {
      setLoginBtn("logout");
    } else {
      setLoginBtn("login");
    }
  };
  return (
    <header>
      <h3>Todo App</h3>
      <button onClick={login}>{loginBtn}</button>
    </header>
  );
}

export default Header;

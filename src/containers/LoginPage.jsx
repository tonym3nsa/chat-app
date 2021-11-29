import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Input } from "../components/Input/Input";
import { Button } from "../components/Button/Button";

export const LoginPage = () => {
  const history = useHistory();
  const [user, setUser] = useState(null)
  const onSubmit =(event)=>{
      event.preventDefault();
      const userName = event.target.username.value;
      localStorage.setItem("chat_user", userName);
      history.push("/chat");
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <Input name="username" placeholder="Enter name" />
        <Button isDisabled={user} >
          GO!
        </Button>
      </form>
    </div>
  );
};

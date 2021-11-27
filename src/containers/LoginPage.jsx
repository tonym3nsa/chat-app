import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Input } from "../components/Input/Input";
import { Button } from "../components/Button/Button";

export const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const history = useHistory();
  const login = () => {
    localStorage.setItem("chat_user", userName);
    history.push("/chat");
  };

  return (
    <div>
      <Input handleChange={setUserName} />
      <Button isDisabled={userName.length < 1} handleClick={login}>
        GO!
      </Button>
    </div>
  );
};

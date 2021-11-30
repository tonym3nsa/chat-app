import React from "react";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import { useHistory } from "react-router-dom";
import { AUTHOR } from "../../constants/constants";
import "./loginPage.css";

export const LoginPage = () => {
  const history = useHistory();

  const onSubmit = (event) => {
    event.preventDefault();
    if (event.target.username.value) {
      localStorage.setItem(AUTHOR, event.target.username.value);
      history.push("/chat");
    }
  };

  return (
    <React.Fragment>
      <div className="login-form">
        <form onSubmit={onSubmit}>
          <Input name="username" placeholder="Enter your name" />
          &nbsp;&nbsp;
          <Button>GO!</Button>
        </form>
      </div>
    </React.Fragment>
  );
};

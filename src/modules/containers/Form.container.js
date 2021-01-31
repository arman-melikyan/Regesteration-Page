import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import Form from "../components/Form";

const Home = () => {
  const history = useHistory();

  const { register, handleSubmit} = useForm({
    mode: "onChange"
  });

  const sendData = useCallback(data => {

    let users = localStorage.getItem("users") || "[]";
    users = JSON.parse(users);
    users.push(data);
    localStorage.setItem("users", JSON.stringify(users));
    history.replace("/chakbox");
  }, [history]);
  return (
    <div>
      <Form
        register={register}
        onSubmit={handleSubmit(sendData)}
      />
    </div>
  );
};
export default Home;

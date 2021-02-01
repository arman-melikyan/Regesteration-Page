import React, { useState } from "react";
import Submit from "../components/Submit";

const CheckBox = () => {
  const users = {
    users: JSON.parse(localStorage.getItem("users")),
  };
  const handleChange = (e) => {
    const value = e.target.value;
    const data = JSON.parse(localStorage.getItem("users"));
    const item = data.find((e) => e.firstName + " " + e.lastName === value);
    setUser(item);
  };
  const [user, setUser] = useState({});
  return (
    <Submit
      setUser={setUser}
      users={users}
      user={user}
      onChange={handleChange}
    />
  );
};
export default CheckBox;


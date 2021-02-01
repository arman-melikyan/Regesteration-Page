import React from "react";
import PropTypes from "prop-types";

import "./style.css";

const Form = ({ register, onSubmit }) => {
  return (
    <div className="Form">
      <h1>User Registration</h1>
      <p>First Name</p>
      <input
        type="text"
        name="firstName"
        ref={register}
        placeholder="FirstName..."
      />

      <p>Last Name</p>
      <input
        type="text"
        name="lastName"
        ref={register}
        placeholder="LastName..."
      />
      <p>Email</p>
      <input type="email" name="email" ref={register} placeholder="Email..." />
      <p>Phone Number</p>
      <input
        type="text"
        name="number"
        ref={register}
        placeholder="PhoneNumber..."
      />
      <p>Password</p>
      <input
        type="password"
        name="password"
        ref={register}
        placeholder="Password..."
      />
      <p>Gender</p>
      <select name="gender" ref={register} defaultValue="Select Gender">
        <option ref={register}>Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <br />
      <br />

      <input
        className="Submit"
        type="submit"
        value="Submit"
        onClick={onSubmit}
      />
    </div>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
};

export default Form;

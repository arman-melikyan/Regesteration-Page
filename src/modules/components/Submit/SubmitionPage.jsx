import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const Submit = ({ users, user, setUser, onChange }) => {
  return (
    <div className="Selection">
      <div> 
        <select onChange={(e) => onChange(e)}>
          <option>Select</option>
          {users?.users.map((item, i) => {
            return (
              <option key={i}>{item.firstName + " " + item.lastName}</option>
            );
          })}
        </select>
      </div>

      {Object.keys(user).length ? (
        <div className="ChakBox">
          <table className="Table">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Password</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> {user.firstName} </td>
                <td> {user.lastName} </td>
                <td> {user.email} </td>
                <td> {user.number} </td>
                <td> {user.password} </td>
                <td> {user.gender} </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        "no user"
      )}
    </div>
  );
};

Submit.defaultProps = {
  setUser: undefined,
  user: {},
};

Submit.propTypes = {
  users: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  user: PropTypes.object,
  setUser: PropTypes.func,
};

export default Submit;

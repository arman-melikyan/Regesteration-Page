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

// class CheckBox extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             users: JSON.parse(localStorage.getItem("users")),
//             oneUser: null
//         };
//     }
//     onChange(e){
//         let value = e.target.value;
//         let data = JSON.parse(localStorage.getItem("users"));
//         let item = data.find((e) => e.firstName + " " + e.lastName === value);
//         this.setState({ oneUser: item });
//     }
//     render() {
//         return (<>

//                 <Submit
//                     onChange = {this.onChange.bind(this)}
//                     {...this.state}
//                 />
//         </>);
//     }
// }
// export default CheckBox;

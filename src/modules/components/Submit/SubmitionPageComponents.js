import React from 'react';
import './style.css'

const Submit = (props) => {

    return(
        <div>
             <div >
                <select onChange={(e) => props.onChange(e)}>
                    <option >Select</option>
                    {props.users.map((item, i) => {
                        return <option key={i}>{item.firstName + " " + item.lastName}</option>
                    })}
                </select>
            </div>
            {props.oneUser ?
                <div className="ChakBox">
                    <table className="Table">
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Password</th>
                        <th>Gender</th>
                    </tr>
                    <tr>
                        <td> {props.oneUser.firstName} </td>
                        <td> {props.oneUser.lastName} </td>
                        <td> {props.oneUser.email} </td>
                        <td> {props.oneUser.number} </td>
                        <td> {props.oneUser.password} </td>
                        <td> {props.oneUser.gender} </td>
                    </tr>
                    </table>
                   
                </div>
                :
                "no user"}
        </div>
    )
}
export default Submit;
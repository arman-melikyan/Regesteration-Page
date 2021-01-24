import React from 'react';
import './style.css'

const Form = (props) => {

    return (
        <div>
            <form onSubmit={(e) => props.handleSubmit(e)}>
                <h1>User Registration</h1>
                <p>First Name</p>
                <input
                    type="text"
                    value={props.firstName}
                    onChange={(e) => props.firsthandler(e)}
                    placeholder="FirstName..."
                    required
                />
                <p>Last Name</p>
                <input
                    type="text"
                    value={props.lastName}
                    onChange={(e) => props.lasthandler(e)}
                    placeholder="LastName..."
                    required
                />
                <p>Email</p>
                <input
                    type="email"
                    value={props.email}
                    onChange={(e) => props.emailhandler(e)}
                    placeholder="Email..."
                    required
                />
                <p>Phone Number</p>
                <input
                    type="text"
                    value={props.number}
                    onChange={(e) => props.numberhandler(e) }
                    placeholder="PhoneNumber..."
                    required
                />
                <p>Password</p>
                <input
                    type="password"
                    value={props.password}
                    onChange={(e) => props.passwordhandler(e)}
                    placeholder="Password..."
                    required
                />
                <p>Gender</p>
                <select onChange={props.genderhandler} defaultValue="Select Gender">
                    <option defaultValue>Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    </select><br /><br />
                <input
                    className="Submit"
                    type="submit"
                    value="Submit"
                />
            </form>
        </div>
    )
}
export default Form;

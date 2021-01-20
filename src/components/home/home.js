import React, { Component } from 'react'
import { Redirect } from 'react-router';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            number: "",
            password: "",
            gender: "",
            nextPage: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    firsthandler = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    lasthandler = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    emailhandler = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    numberhandler = (event) => {
        this.setState({
            number: event.target.value
        })
    }
    passwordhandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    genderhandler = (event) => {
        this.setState({
            gender: event.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state);
          this.setState({
             nextPage: true
         }) 

        let users = localStorage.getItem("users") || "[]";
        users = JSON.parse(users);
        users.push(this.state);
        localStorage.setItem("users", JSON.stringify(users));

    }

    render() {
        const nextPage = this.state.nextPage;
        if (nextPage) {
            return <Redirect to={{
                pathname: '/chakbox'
            }}
            />
        }
        return (
            <div >
                <form onSubmit={this.handleSubmit}>
                    <h1>User Registration</h1>
                    <p>First Name</p>
                    <input
                        type="text"
                        value={this.state.firstName}
                        onChange={this.firsthandler}
                        placeholder="FirstName..."
                        required
                    />
                    <p>Last Name</p>
                    <input
                        type="text"
                        value={this.state.lastName}
                        onChange={this.lasthandler}
                        placeholder="LastName..."
                        required
                    />
                    <p>Email</p>
                    <input
                        type="email"
                        value={this.state.email}
                        onChange={this.emailhandler}
                        placeholder="Email..."
                        required
                    />
                    <p>Phone Number</p>
                    <input
                        type="text"
                        value={this.state.number}
                        onChange={this.numberhandler }
                        placeholder="PhoneNumber..."
                        required
                    />
                    <p>Password</p>
                    <input
                        type="password"
                        value={this.state.password}
                        onChange={this.passwordhandler}
                        placeholder="Password..."
                        required
                    />
                    <p>Gender</p>
                    <select onChange={this.genderhandler} defaultValue="Select Gender">
                        <option defaultValue>Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select><br /><br />

                    <input
                        type="submit"
                        value="Submit"
                    />
                </form>
            </div>
        )
    }
};
export default Home;

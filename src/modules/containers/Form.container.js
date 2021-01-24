import React, { Component } from 'react'
import { Redirect } from 'react-router';
import Form from '../components/Form/FormComponents'

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

    firsthandler(event) {
        this.setState({
            firstName: event.target.value
        })
    }
    lasthandler(event) {
        this.setState({
            lastName: event.target.value
        })
    }
    emailhandler(event) {
        this.setState({
            email: event.target.value
        })
    }
    numberhandler(event) {
        this.setState({
            number: event.target.value
        })
    }
    passwordhandler(event) {
        this.setState({
            password: event.target.value
        })
    }

    genderhandler(event) {
        this.setState({
            gender: event.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
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
                <Form
                    firsthandler={this.firsthandler.bind(this)}
                    lasthandler={this.lasthandler.bind(this)}
                    emailhandler={this.emailhandler.bind(this)}
                    numberhandler={this.numberhandler.bind(this)}
                    passwordhandler={this.passwordhandler.bind(this)}
                    genderhandler={this.genderhandler.bind(this)}
                    handleSubmit={this.handleSubmit.bind(this)}
                    {...this.state}
                />
            </div>
        )
    }
};
export default Home;

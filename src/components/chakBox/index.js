import React from 'react';

class CheckBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: JSON.parse(localStorage.getItem("users")),
            oneUser: null
        };
    }

    onChange(e) {
        let value = e.target.value;
        let data = JSON.parse(localStorage.getItem("users"));
        let item = data.find((e) => e.firstName + " " + e.lastName === value);
        this.setState({ oneUser: item });
    }

    render() {
        return (<>
            <div >
                <select onChange={this.onChange.bind(this)} >
                    <option >Select</option>
                    {this.state.users.map((item, i) => {
                        return <option key={i}>{item.firstName + " " + item.lastName}</option>
                    })}
                </select>
            </div>
            {this.state.oneUser ?
                <>
                    <p>Firt Name: {this.state.oneUser.firstName}</p>
                    <p>Lat Name: {this.state.oneUser.lastName}</p>
                    <p>Email: {this.state.oneUser.email}</p>
                    <p>Phone Number: {this.state.oneUser.number}</p>
                    <p>Password: {this.state.oneUser.password}</p>
                    <p>Gender: {this.state.oneUser.gender}</p>
                </>
                :
                "no user"}
        </>);
    }
}
export default CheckBox;

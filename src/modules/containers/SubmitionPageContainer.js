import React from 'react';
import Submit from '../components/Submit/SubmitionPageComponents';

class CheckBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: JSON.parse(localStorage.getItem("users")),
            oneUser: null
        };
    }
    onChange(e){
        let value = e.target.value;
        let data = JSON.parse(localStorage.getItem("users"));
        let item = data.find((e) => e.firstName + " " + e.lastName === value);
        this.setState({ oneUser: item });
    }
    render() {
        return (<>

                <Submit
                    onChange = {this.onChange.bind(this)}
                    {...this.state}
                />
        </>);
    }
}
export default CheckBox;

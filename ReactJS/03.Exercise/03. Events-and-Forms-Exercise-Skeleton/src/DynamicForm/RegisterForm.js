import React from 'react';
import './register.css';

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            email: null,
            password: null
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <div className="Register">
                <h1>Sign Up</h1>
                <form onSubmit={(event) => {
                    event.preventDefault();
                    this.props.registerUser(this.state);
                }}>
                    <label>Username</label>
                    <input type="text" onChange={this.handleChange} name="username" id="usernameReg"/>
                    <label>Email</label>
                    <input type="text" onChange={this.handleChange} name="email" id="emailReg"/>
                    <label>Password</label>
                    <input type="password" onChange={this.handleChange} name="password" id="passwordReg"/>
                    <input type="submit" value="Sign Up"/>
                </form>
            </div>
        )
    }
}
export default RegisterForm;
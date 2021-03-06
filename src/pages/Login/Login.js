import React, { Component } from 'react'
import UserService from '../../services/user_service.js';
import utility from '../../utility';
import './Login.css';
import cookie from 'js-cookie';
import { connect } from 'react-redux';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: {
                email: '',
                password: '',
                error: false,
            },
        }
    }

    handleForm = event => {
        event.preventDefault();
        console.log(`i am  in login` , this.state);
        this.validate('email', this.state.email)
        this.validate('password', this.state.password)
        if(!this.state.errors.error) {
            console.log('api call');
            UserService.login(this.state).then((data) => {
                console.log("response from login", data);
                cookie.set( "token", data.data.access_token);
                // cookie.set( "user", data.data.user);
                this.props.setLogin(data.data.user);
                this.props.history.push('/profile');
            })
            .catch((error) => {
                console.log("error from login", error.response.data);
            })
        }
    }

    handleInput = event => {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value }, () => {
        })
        this.validate(event.target.name, event.target.value)
    }
    validate(name, value) {
        let errors = this.state.errors;
        switch (name) {
            case 'email':
                console.log(utility.isEmailValid(value));
                if (!utility.isEmailValid(value)) {
                    errors.email = 'user Name is invalid'
                    errors.error = true;

                } else {
                    errors.email = ''
                    errors.error = false;

                }
                break;
            case 'password':
                if (value.length < 5) {
                    errors.password = 'password must be 5 characters long!';
                    errors.error = true;
                }
                else {
                    errors.password = ''
                    errors.error = false;
                }
                break;
            default:
                break;
        }
        this.setState({ errors, [name]: value }, () => {
        })
    }

    render() {
        const { errors } = this.state;
        return (
            <div className="flex">
                <div className="w-1/3" />
                <div className="w-1/3 p-4 bg-white">
                    <form className="border border-gray-500" onSubmit={this.handleForm}>
                        <div className="p-4">
                            <h1 className="text-lg border-b border-gray-500">Ping Here</h1>
                            {/* {errors.error.email ? <p className="text-red text-sm">{errors.error.email}</p>: ""} */}
                            <div className="mt-4">
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Lovely Email"
                                    autoComplete='off'
                                    onChange={this.handleInput}
                                    className="mt-2 p-2 bg-gray-200 rounded border border-grap-400 w-full"
                                />
                                <span className='error'>{errors.email}</span>
                            </div>
                            <div className="mt-4">
                                <label>Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Super Duper Secret Password"
                                    onChange={this.handleInput}
                                    autoComplete='off'
                                    className="mt-2 p-2 bg-gray-200 rounded border border-grap-400 w-full"
                                />
                                <span className='error'>{errors.password}</span>
                            </div>
                            <div className="mt-4">
                                <input 
                                    type="submit"
                                    value="Login"
                                    className="mt-2 p-2 border border-gray-400 rounded cursor-pointer bg-purple-500 text-white" 
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setLogin: (user) => dispatch({type: "SET_LOGIN", payload: user })
    };
};

export default connect(null, mapDispatchToProps)(Login);
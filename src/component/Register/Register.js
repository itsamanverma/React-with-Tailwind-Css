import React, { Component } from 'react'
import UserService from '../../services/user_service.js';
import utility from '../../utility';
import './Register.css';

export default class Register extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        errors: {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
            error: false,
        }
    }
    handleForm = event => {
        event.preventDefault();
        console.log(`i am  in register` , this.state);
        this.validate('name', this.state.name)
        this.validate('email', this.state.email)
        this.validate('password', this.state.password)
        this.validate('password_confirmation', this.state.password_confirmation)    
        if(!this.state.errors.error) {
            console.log('api call');
            UserService.register(this.state).then((data) => {
                console.log("response from register", data);
                // this.props.history.push('/login');
            })
            .catch((error) => {
                console.log("error from register", error.response.data);
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
            case 'name':
                if (value.length < 3) {
                    errors.name = 'Name must be 3 characters long!';
                    errors.error = true;
                }
                else if (!utility.isStringValid(value)) {
                    errors.name = 'name is invalid'
                    errors.error = true;

                } else {
                    errors.name = ''
                    errors.error = false;

                }
                break;
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
            case 'password_confirmation':
                if (value.length < 5) {
                    errors.password_confirmation = 'confirm password must be 5 characters long!';
                    errors.error = true;
                }
                else {
                    errors.password_confirmation = ''
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
                            <h1 className="text-lg border-b border-gray-500">Pong Here</h1>
                            {/* {errors.error.email ? <p className="text-red text-sm">{errors.error.email}</p>: ""} */}
                            <div className="mt-4">
                                <label>Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    autoComplete='off'
                                    onChange={this.handleInput}
                                    className="mt-2 p-2 bg-gray-200 rounded border border-grap-400 w-full"
                                />
                                <span className='error'>{errors.name}</span>
                            </div>
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
                                <label>Confirm Password</label>
                                <input
                                    type="password"
                                    name="password_confirmation"
                                    placeholder="Confirm Your Password"
                                    autoComplete='off'
                                    onChange={this.handleInput}
                                    className="mt-2 p-2 bg-gray-200 rounded border border-grap-400 w-full"
                                />
                                <span className='error'>{errors.password_confirmation}</span>
                            </div>
                            <div className="mt-4">
                                <input
                                    type="submit"
                                    value="Register"
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

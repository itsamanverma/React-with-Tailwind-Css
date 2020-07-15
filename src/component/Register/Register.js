import React, { Component } from 'react'

export default class Register extends Component {
    render() {
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
                                {/* <span className='error'>{errors.email}</span> */}
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
                                {/* <span className='error'>{errors.email}</span> */}
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
                                {/* <span className='error'>{errors.password}</span> */}
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
                                {/* <span className='error'>{errors.email}</span> */}
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

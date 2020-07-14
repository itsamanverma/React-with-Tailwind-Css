import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div className="flex">
                <div className="w-1/3" />
                <div className="w-1/3 p-4 bg-white">
                    <form className="border border-gray-500">
                        <div className="p-4">
                            <h1 className="text-lg border-b border-gray-500">Ping Here</h1>
                            <div>
                                <label>Email</label>
                                <input type="email" name="email" placeholder="Lovely Email" 
                                className="p-2 bg-gray-200 rounded border border-grap-400 w-full"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
